"use client";
import { useState, useEffect } from "react";
import React from "react";

const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevDisplayText) => {
        const nextCharacter = text[currentIndex];
        currentIndex++;
        return prevDisplayText + nextCharacter;
      });

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayText}</span>;
};

export default Typewriter;
