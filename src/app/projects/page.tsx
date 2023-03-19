import React from "react";
import { projects } from "../../app/data/page-data";

import Projects from "../component/Projects";
import SidebarSliding from "../component/SidebarSliding";

export default function ProjectsPage() {
  return (
    <>
      <SidebarSliding />
      <div className="bg-black py-20 px-6">
        <h1 className="text-white text-center">Projects</h1>
      </div>
      <div className="px-6 py-6">
        <Projects data={projects} />
      </div>
    </>
  );
}
