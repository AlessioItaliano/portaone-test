import { useRef, useState } from "react";
import Button from "components/Button";

import * as s from "./Form.styled";

const Form = ({ onSubmit, setIsLoading }) => {
  const fileInput = useRef(null);
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = () => {
    setFileSelected(fileInput.current.files.length > 0);
  };

  const handleClear = () => {
    fileInput.current.value = null;
    setFileSelected(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const file = fileInput.current.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const numbers = event.target.result;
      onSubmit(numbers);
      setIsLoading(false);
    };
    reader.onerror = (event) => {
      console.error("Error:", event.target.error);
      setIsLoading(false);
    };
    reader.readAsText(file);
  };

  return (
    <s.Form onSubmit={handleSubmit}>
      {!fileSelected ? (
        <s.Label htmlFor="fileInput">Click here to select a file...</s.Label>
      ) : (
        <s.Label htmlFor="fileInput">You choose ONE file...</s.Label>
      )}
      <s.Input
        type="file"
        ref={fileInput}
        id="fileInput"
        accept="text/plain"
        onChange={handleFileChange}
      />
      <Button type={"submit"} name={"Read"} disabled={!fileSelected} />
      <Button
        type={"button"}
        func={handleClear}
        name={"Clear"}
        disabled={!fileSelected}
      />
    </s.Form>
  );
};

export default Form;
