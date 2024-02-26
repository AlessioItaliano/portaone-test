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
      const numbers = event.target.result;
      setNewNumbersList(numbers);
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="fileInput">Виберіть файл:</label>
          <input type="file" id="fileInput" />
          <button type="submit">Зчитати</button>
          <button type="button" onClick={handleClear}>
            Очистити файл
          </button>
        </form>
      </>

      {!newNumbersList ? (
        <>
          <p>Please upload a file with numbers in .txt format.</p>
          <p>After the calculations, your result will be here.</p>
        </>
      ) : (
        <ResponseLines newNumbersList={newNumbersList} />
      )}
    </s.Container>
  );
};

export default EnterPage;
