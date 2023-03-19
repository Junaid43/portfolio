"use client";

import React from "react";

import Typewriter from "typewriter-effect";

export default function HeadSection() {
  return (
    <h1 className="text-white text-center">
      <Typewriter
        options={{
          strings: [
            `I'm Muhammad Junaid!`,
            `WordPress Developer`,
            `2+ Year Experience`,
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
}
