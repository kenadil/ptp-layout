import { useEffect, useRef, useState } from "react";

export function useScrollDirection() {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (prevScrollY.current < currentScrollY && goingUp) setGoingUp(false);
    if (prevScrollY.current > currentScrollY && !goingUp) setGoingUp(true);
    prevScrollY.current = currentScrollY;
    setScroll(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  return scroll;
}
