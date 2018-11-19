import styled from "styled-components";
import border from "../../styles/border";

const TextInput = styled.input.attrs({
  type: "text"
})`
  padding: 0.5em 0.8em;
  font-size: 2rem;

  ${border({
    size: 10
  })};

  :focus {
    outline: none;
  }
`;

export default TextInput;
