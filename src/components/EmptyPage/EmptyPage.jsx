import * as s from "./EmptyPage.styled";

const EmptyPage = () => {
  return (
    <s.Container>
      <s.Text>Please upload a file with numbers in .txt format.</s.Text>
      <s.Text>After the calculations, your result will be here.</s.Text>
    </s.Container>
  );
};

export default EmptyPage;
