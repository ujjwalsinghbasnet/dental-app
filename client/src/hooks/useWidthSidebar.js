import { useState, useEffect } from "react";

<<<<<<< HEAD
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
=======

const useWidthSidebar = () => {
    const [pos,setPos] = useState(false)
    useEffect(() => {
        if(window.innerWidth <= 975){
            setPos(true)
        }
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 975){
                setPos(true)
            } else {
                setPos(false)
            }
        })
        return () => {
            window.removeEventListener('resize', null)
        }
    },[])

    return pos
}

export default useWidthSidebar
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
