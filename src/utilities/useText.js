import { useState } from "react";

const useText = () => {
  const [text, setText] = useState("");

  const handleChangeText = ({ target: { value } }) => setText(value);

  return {
    text,
    handleChangeText
  };
};

export default useText;
