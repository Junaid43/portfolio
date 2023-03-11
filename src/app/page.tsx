import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import "./globals.css";

import AboutMe from "./component/AboutMe";

import { aboutMe, skills, professionalData } from "../app/data/page-data";
import Skills from "./component/Skills";
import Professionals from "./component/Professionals";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AboutMe data={aboutMe} />
      <Skills data={skills} />
      <Professionals data={professionalData} />
    </>
  );
}
