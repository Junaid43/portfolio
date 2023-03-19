import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import "./globals.css";

import AboutMe from "./component/AboutMe";

import {
  aboutMe,
  skills,
  professionalData,
  certification,
  projects,
} from "../app/data/page-data";
import Skills from "./component/Skills";
import Professionals from "./component/Professionals";
import Certification from "./component/Certification";
import Projects from "./component/Projects";
import SidebarMenu from "./component/SidebarMenu";
import Sidebar from "./component/SidebarSliding";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <nav className=" text-black flex gap-2 flex-wrap underline">
        <SidebarMenu href="/#about">About</SidebarMenu>
        <SidebarMenu href="/#certification">Certification</SidebarMenu>
        <SidebarMenu href="/#contact">Contact</SidebarMenu>
      </nav> */}

      <AboutMe data={aboutMe} />
      <Skills data={skills} />
      <Professionals data={professionalData} />

      <Certification data={certification} />

      <Projects data={projects} />
    </>
  );
}
