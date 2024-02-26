import Form from "components/Form";
import * as s from "./Header.styled";

const Header = ({ onSubmit, setIsLoading }) => {
  return (
    <s.Header>
      <s.Container>
        <Form onSubmit={onSubmit} setIsLoading={setIsLoading} />
      </s.Container>
    </s.Header>
  );
};

export default Header;
