import { useState } from "react";
import * as s from "./EnterPage.styled";
import ResponseLines from "components/ResponseLines";

const EnterPage = () => {
  const [newNumbersList, setNewNumbersList] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      setNewNumbersList(content);
    };
    reader.onerror = (event) => {
      console.error("Помилка читання файлу:", event.target.error);
    };
    reader.readAsText(file);
  };

  const handleClear = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.value = null;
  };

  return (
    <s.Container>
      <>
        {" "}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fileInput">Виберіть файл:</label>
          <input type="file" id="fileInput" />
          <button type="submit">Зчитати</button>
          <button type="button" onClick={handleClear}>
            Очистити файл
          </button>
        </form>
      </>

      {newNumbersList && <ResponseLines newNumbersList={newNumbersList} />}
    </s.Container>
  );
};

export default EnterPage;
