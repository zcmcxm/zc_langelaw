import { MouseEvent, useEffect, useState } from "react";

const navigationHeight = 80;

const useScrollTo = () => {
  const [height, setHeight] = useState(navigationHeight);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 480px)")) {
        setHeight(56);
      } else {
        setHeight(navigationHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToEl = (e: MouseEvent): void => {
    e.preventDefault();
    const hash = (e.target as HTMLAnchorElement).hash;
    const targetElement = document?.querySelector(hash) as HTMLElement | null;

    console.log(e);
    console.log("hash: ", hash);
    console.log("targetElement: ", targetElement);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - height;

      window.scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return { scrollToEl };
};

export default useScrollTo;
