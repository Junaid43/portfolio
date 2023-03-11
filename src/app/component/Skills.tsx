"use client";
import React, { useState } from "react";

export default function Skills({ data }: { data: any }) {
  // const { soft, technicalskill } = data;

  const [activeTab, setActiveTab] = useState("soft");

  const setBg = (active: any) =>
    activeTab === active ? "bg-yellow" : "bg-grey";

  const setTextAlign = (tab: any) =>
    tab === "soft" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex">
      {["soft", "technical"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn--skills ${setBg(el)} ${setTextAlign(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );

  const skills = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none gap-2 py-4 ${
        activeTab === "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }) => (
        <li key={text} className="skills">
          <span>{icon}</span> {text}
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <section>
        <div>
          {tabs}
          {skills}
        </div>
      </section>
    </>
  );
}
