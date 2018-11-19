import React from "react";
import styled from "styled-components";

import { BoldButton, ItalicsButton, UnderlineButton } from "../Button/Button";
import Slider from "../Slider/Slider";

import border from "../../styles/border";

const StyledControlBar = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${border({
    size: 10
  })};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 100%;
  }

  * + * {
    margin-left: 1rem;
  }
`;

const ControlBar = ({
  fontSize,
  xDeg,
  yDeg,
  zDeg,
  bold,
  italic,
  underline,
  handleChangeFontSize,
  handleChangeXDeg,
  handleChangeYDeg,
  handleChangeZDeg,
  handleToggleBold,
  handleToggleItalic,
  handleToggleUnderline
}) => (
  <StyledControlBar>
    <Slider
      name="Size"
      onChange={handleChangeFontSize}
      value={fontSize}
      min="1"
      max="200"
      step="1"
    />
    <Slider
      name="X deg"
      onChange={handleChangeXDeg}
      value={xDeg}
      min="-180"
      max="180"
      step="1"
    />
    <Slider
      name="Y deg"
      onChange={handleChangeYDeg}
      value={yDeg}
      min="-360"
      max="180"
      step="1"
    />
    <Slider
      name="Z deg"
      onChange={handleChangeZDeg}
      value={zDeg}
      min="-180"
      max="180"
      step="1"
    />
    <ButtonBox>
      <BoldButton onClick={handleToggleBold} bold={bold} />
      <ItalicsButton onClick={handleToggleItalic} italic={italic} />
      <UnderlineButton onClick={handleToggleUnderline} underline={underline} />
    </ButtonBox>
  </StyledControlBar>
);

export default ControlBar;
