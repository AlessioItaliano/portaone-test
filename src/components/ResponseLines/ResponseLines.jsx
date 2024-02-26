import { useState } from "react";
import * as s from "./ResponseLines.styled";

const ResponseLines = ({ newNumbersList }) => {
  const [maxNumber, setMaxNumber] = useState("");
  const [minNumber, setMinNumber] = useState("");
  const [median, setMedian] = useState("");
  const [averageNumber, setAverageNumber] = useState("");

  const numbers = newNumbersList.trim().split("\n").map(Number);

  console.log("Масив чисел:", numbers);

  setMaxNumber(1);
  setMinNumber(1);
  setMedian(1);
  setAverageNumber(1);

  return (
    <s.Container>
      <p>1. The maximum number in the file : {maxNumber}</p>
      <p>2. The minimum number in the file : {minNumber}</p>
      <p>3. The median : {median}</p>
      <p>4. Average arithmetic value : {averageNumber}</p>
    </s.Container>
  );
};

export default ResponseLines;
