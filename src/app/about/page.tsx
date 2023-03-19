import Image from "next/image";
import React from "react";
import HeadSection from "../component/about/HeadSection";
import SidebarSliding from "../component/SidebarSliding";

import aboutImage from "../../../public/computer_vector.png";
import AboutMe from "../component/AboutMe";
import { aboutMe } from "../../app/data/page-data";

export default function About() {
  return (
    <>
      <div className="">
        <SidebarSliding />

        <div className="bg-black py-20 px-6">
          <HeadSection />
        </div>
        <div className="px-6 py-6 grid-cols-3 gap-4">
          <div className="">
            <AboutMe data={aboutMe} />
          </div>
          <div className="">
            <Image
              src={aboutImage}
              width={500}
              height={500}
              alt="about image"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
