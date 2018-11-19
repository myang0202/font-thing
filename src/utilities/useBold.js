import { useState } from "react";

const useBold = () => {
  const [bold, setBold] = useState(false);

  const handleToggleBold = () => setBold(!bold);

  return { bold, handleToggleBold };
};

export default useBold;
