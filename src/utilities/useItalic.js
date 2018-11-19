import { useState } from "react";

function useItalic() {
  const [italic, setItalic] = useState(false);

  const handleToggleItalic = () => setItalic(!italic);

  return { italic, handleToggleItalic };
}

export default useItalic;
