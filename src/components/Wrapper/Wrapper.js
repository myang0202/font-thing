import styled from "styled-components";

import center from "../../styles/center";
import border from "../../styles/border";

const Wrapper = styled.div`
  overflow: hidden;
  ${border({
    size: 10
  })};
  ${center()};
`;

export default Wrapper;
