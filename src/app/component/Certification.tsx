import React, { useId } from "react";

export default function Certification({ data }: { data: any }) {
  const { details, maintitle } = data;

  const id = useId();
  return (
    <>
      <section>
        <h2 className="pb-2 bold font-bold uppercase">{maintitle}</h2>

        {details.map(
          ({ title, location }: { title: string; location: string }) => (
            <div className="bg-grey px-6 py-6 border-t-[6px] border-blue mb-6">
              <li key={`${id}`} className="text-black bold text-xl list-none">
                {title}{" "}
                <span key={title} className="text-base">
                  ({location})
                </span>{" "}
              </li>
            </div>
          )
        )}
      </section>
    </>
  );
}
