"use client";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const classNameDark = "dark";
    const classNameLight = "light"
    const bodyClass = window.document.body.classList;

    if (colorMode === "dark"){
      bodyClass.add(classNameDark);
      bodyClass.remove(classNameLight)
    } else if (colorMode === "light") {
      bodyClass.add(classNameLight);
      bodyClass.remove(classNameDark)
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;