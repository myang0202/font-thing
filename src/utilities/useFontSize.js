import { useState } from "react";

const useFontSize = initialState => {
  const [fontSize, setFontSize] = useState(initialState);

  const handleChangeFontSize = ({ target: { value } }) => setFontSize(value);

  return {
    fontSize,
    handleChangeFontSize
  };
};

export default useFontSize;
