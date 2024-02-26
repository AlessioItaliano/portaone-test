// import { useState } from "react";
import * as s from "./ResponseLines.styled";

const ResponseLines = ({ newNumbersList }) => {
  //   const [maxNumber, setMaxNumber] = useState("");
  //   const [minNumber, setMinNumber] = useState("");
  //   const [median, setMedian] = useState("");
  //   const [averageNumber, setAverageNumber] = useState("");

  const numbers = newNumbersList.trim().split("\n").map(Number);

  console.log(numbers);

  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  let minNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
  }

  const addDots = (number) => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  };

  return (
    <s.Container>
      <p>1. The maximum number is : {addDots(maxNumber)}</p>
      <p>2. The minimum number is: {addDots(minNumber)}</p>
      {/* <p>3. The median : {median}</p> */}
      {/* <p>4. Average arithmetic value : {averageNumber}</p> */}
    </s.Container>
  );
};

export default ResponseLines;
