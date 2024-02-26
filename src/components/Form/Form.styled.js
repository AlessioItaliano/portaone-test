import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
