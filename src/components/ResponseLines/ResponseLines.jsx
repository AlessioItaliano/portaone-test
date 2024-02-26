// import { useState } from "react";
import * as s from "./ResponseLines.styled";

const ResponseLines = ({ newNumbersList }) => {
  //   const [maxNumber, setMaxNumber] = useState("");
  //   const [minNumber, setMinNumber] = useState("");
  //   const [median, setMedian] = useState("");
  //   const [averageNumber, setAverageNumber] = useState("");

  const numbers = newNumbersList.trim().split("\n").map(Number);

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

  const averageNumber = (numbers) => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const result = sum / numbers.length;

    return result;
  };

  const median = (numbers) => {
    numbers.sort((a, b) => a - b);

    const middle = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
      return (numbers[middle - 1] + numbers[middle]) / 2;
    } else {
      return numbers[middle];
    }
  };

  return (
    <s.List>
      <s.Item>
        <s.Span>The maximum number is :</s.Span>
        {addDots(maxNumber)}
        <s.Description>Result without dots: {maxNumber}</s.Description>
      </s.Item>
      <s.Item>
        <s.Span>The minimum number is:</s.Span>
        {addDots(minNumber)}
        <s.Description>Result without dots: {minNumber}</s.Description>
      </s.Item>
      <s.Item>
        <s.Span> The median :</s.Span> {median(numbers)}
      </s.Item>
      <s.Item>
        <s.Span>Average arithmetic value :</s.Span>
        {averageNumber(numbers).toFixed(2)}
        <s.Description>
          Number rounded to 2 decimal places, result without truncation:{" "}
          {averageNumber(numbers)}
        </s.Description>
      </s.Item>
    </s.List>
  );
};

export default ResponseLines;
