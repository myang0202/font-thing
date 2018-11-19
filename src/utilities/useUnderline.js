import { useState } from "react";

const useUnderline = () => {
  const [underline, setUnderline] = useState(false);

  const handleToggleUnderline = () => setUnderline(!underline);

  return { underline, handleToggleUnderline };
};

export default useUnderline;
