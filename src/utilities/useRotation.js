import { useState } from "react";

const useRotation = () => {
  const [xDeg, setXDeg] = useState(0);
  const [yDeg, setYDeg] = useState(0);
  const [zDeg, setZDeg] = useState(0);

  const handleChangeXDeg = ({ target: { value } }) => setXDeg(value);
  const handleChangeYDeg = ({ target: { value } }) => setYDeg(value);
  const handleChangeZDeg = ({ target: { value } }) => setZDeg(value);

  return {
    xDeg,
    yDeg,
    zDeg,
    handleChangeXDeg,
    handleChangeYDeg,
    handleChangeZDeg
  };
};

export default useRotation;
