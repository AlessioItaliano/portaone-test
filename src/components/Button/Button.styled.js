import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 15px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  cursor: pointer;

  border-radius: 12px;
  border-color: transparent;
  background: #3470ff;

  color: white;

  &:focus,
  &:hover {
    background-color: #0b44cd;
  }

  &:disabled {
    color: gray;
    background-color: lightgray;
    cursor: auto;
  }
`;
