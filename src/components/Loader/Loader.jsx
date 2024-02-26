import { Hourglass } from "react-loader-spinner";

import * as s from "./Loader.styled";

const Loader = () => {
  return (
    <s.LoaderStyle>
      <Hourglass
        visible={true}
        height="90"
        width="90"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={[`#306cce`, `#72a1ed`]}
      />
    </s.LoaderStyle>
  );
};

export default Loader;
