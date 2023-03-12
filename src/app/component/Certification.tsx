import React from "react";

export default function Certification({ data }: { data: any }) {
  const { details, maintitle } = data;
  return (
    <>
      <section>
        <h2 className="pb-2 bold font-bold uppercase">{maintitle}</h2>

        {details.map(
          ({ title, location }: { title: string; location: string }) => (
            <div className="bg-grey px-6 py-6 border-t-[6px] border-blue mb-6">
              <li key={title} className="text-black bold text-xl list-none">
                {title} <span className="text-base">({location})</span>{" "}
              </li>
            </div>
          )
        )}
      </section>
    </>
  );
}
