import styled from "styled-components";

const Button = styled.button`
  padding: 0.3rem;
  background: #fff;
  border: 3px solid ${props => props.theme.colorPrimary};
  color: ${props => props.theme.colorPrimary};
  cursor: pointer;
  font-family: serif;
  font-size: 1.5em;

  :hover {
    opacity: 0.7;
  }

  :focus {
    outline: none;
    opacity: 0.7;
  }
`;

const BoldButton = styled(Button).attrs({
  children: "B"
})`
  font-weight: ${props => props.bold && "bold"};
`;

const ItalicsButton = styled(Button).attrs({
  children: "I"
})`
  font-style: ${props => props.italic && "italic"};
`;

const UnderlineButton = styled(Button).attrs({
  children: "U"
})`
  text-decoration: ${props => props.underline && "underline"};
`;

export { Button, BoldButton, ItalicsButton, UnderlineButton };

export default Button;
