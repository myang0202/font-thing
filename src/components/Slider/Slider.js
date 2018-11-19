import React from "react";
import styled from "styled-components";

const StyledSlider = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  font-weight: bold;
  user-select: none;
`;

const Range = styled.input.attrs({
  type: "range"
})`
  appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 36px;
    width: 16px;
    margin-top: -14px;
    background: #ffffff;
    border: 2px solid ${props => props.theme.colorPrimary};
    border-radius: 3px;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: 8.4px;
    width: 100%;
    background: ${props => props.theme.colorPrimary};
    border-radius: 1.3px;
    cursor: pointer;
  }

  &:focus::-webkit-slider-runnable-track {
    opacity: 0.8;
  }
`;

const Slider = ({ name, onChange, value, min, max, step }) => (
  <StyledSlider>
    <Label htmlFor={name}>{name}</Label>
    <Range
      id={name}
      onChange={onChange}
      value={value}
      min={min}
      max={max}
      step={step}
    />
  </StyledSlider>
);

export default Slider;
