import styled from "styled-components";

const Text = styled.p`
  display: inline;
  margin: 0;
  white-space: nowrap;
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.bold && "bold"};
  font-style: ${props => props.italic && "italic"};
  text-decoration: ${props => [props.underline && "underline"]};
  transform: rotateX(${props => `${props.xDeg}deg`})
    rotateY(${props => `${props.yDeg}deg`})
    rotateZ(${props => `${props.zDeg}deg`});
`;

export default Text;
