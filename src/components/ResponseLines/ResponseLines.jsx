import { maxNumber } from "helpers/maxNumber";
import { minNumber } from "helpers/minNumber";
import { addDots } from "helpers/addDots";
import { median } from "helpers/median";
import { averageNumber } from "helpers/averageNumber";

import * as s from "./ResponseLines.styled";

const ResponseLines = ({ newNumbersList }) => {
  const numbers = newNumbersList.trim().split("\n").map(Number);

  return (
    <s.Container>
      <s.List>
        <s.Item>
          <s.Span>The maximum number is :</s.Span>
          {addDots(maxNumber(numbers))}
          <s.Description>
            Result without dots: {maxNumber(numbers)}
          </s.Description>
        </s.Item>
        <s.Item>
          <s.Span>The minimum number is:</s.Span>
          {addDots(minNumber(numbers))}
          <s.Description>
            Result without dots: {minNumber(numbers)}
          </s.Description>
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
    </s.Container>
  );
};

export default ResponseLines;
