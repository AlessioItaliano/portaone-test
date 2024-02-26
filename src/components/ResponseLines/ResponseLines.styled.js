import styled from "styled-components";

export const Container = styled.div`
  width: 420px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 4px #123f4c26;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 10px 20px;
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 30px;
`;

export const Item = styled.li`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export const Span = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

export const Description = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: black;
`;
