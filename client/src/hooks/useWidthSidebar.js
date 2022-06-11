import { useState, useEffect } from "react";

const useWidthSidebar = () => {
  const [pos, setPos] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 975) {
      setPos(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 975) {
        setPos(true);
      } else {
        setPos(false);
      }
    });
    return () => {
      window.removeEventListener("resize", null);
    };
  }, []);

  return pos;
};

export default useWidthSidebar;
