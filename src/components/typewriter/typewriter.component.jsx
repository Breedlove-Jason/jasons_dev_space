import React, { useState, useEffect } from "react";
import { TypewriterText } from "./typewriter.styles";

const Typewriter = ({ wordsList }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (currentCharIndex < wordsList[currentWordIndex].length) {
      const timeoutId = setTimeout(() => {
        setText(
          (prevText) =>
            prevText + wordsList[currentWordIndex][currentCharIndex],
        );
        setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentWordIndex(
          (prevWordIndex) => (prevWordIndex + 1) % wordsList.length,
        );
        setCurrentCharIndex(0);
        setText("");
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentWordIndex, currentCharIndex, text]);

  return <TypewriterText>{text}</TypewriterText>;
};

export default Typewriter;
