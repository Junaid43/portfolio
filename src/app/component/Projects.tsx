import Image from "next/image";
import React from "react";

export default function Projects({ data }: { data: any }) {
  const { title, details, excerpt, id, image } = data;
  return (
    <>
      <section id="projects">
        <h2 className="pb-2 bold font-bold uppercase">{title}</h2>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
          {details.map(
            ({
              project_title,
              excerpt,
              project_id,
              image,
            }: {
              project_title: string;
              excerpt: string;
              project_id: any;
              image: any;
            }) => (
              <div
                className="px-4 py-4 bg-white shadow-lg rounded-lg overflow-hidden"
                key={project_id}
              >
                <div
                  className=" max-w-lg max-h-96 overflow-hidden object-top hover:object-bottom"
                  key={project_id}
                >
                  <Image
                    src={image}
                    alt={image}
                    width={500}
                    height={500}
                  ></Image>
                </div>
                <div key={project_id} className="p-6">
                  <h4
                    key={project_title}
                    className="text-black text-2xl font-semibold"
                  >
                    {project_title}
                  </h4>
                  <p key={excerpt}>{excerpt}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
