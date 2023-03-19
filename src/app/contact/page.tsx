import React from "react";

import SidebarSliding from "../component/SidebarSliding";

export default function About() {
  return (
    <>
      <div className="">
        <SidebarSliding />

        <div className="bg-black py-20 px-6">
          <h1 className="text-white text-center">Contact Us</h1>
        </div>
        <div className=" flex flex-col justify-center align-center px-6 py-6">
          <div className=" md:w-1/2 flex flex-col self-start bg-gray-200 p-10"></div>
          <div className="text-center">
            <div className="flex flex-wrap flex-row justify-center item-center">
              <form className="grid grid-rows-2 gap-4 md:grid-cols-2 text-left container">
                <div className="grid grid-rows-2 ">
                  <label className="font-semibold pb-3">First Name</label>
                  <input
                    placeholder="First Name"
                    type={"text"}
                    className=" p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded"
                  ></input>
                </div>
                <div className="grid grid-rows-2 ">
                  <label className="font-semibold pb-3 ">Last Name</label>
                  <input
                    placeholder="Last Name"
                    type={"text"}
                    className="p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded "
                  ></input>
                </div>
                <div className="grid grid-rows-2 md:col-span-2">
                  <label className="font-semibold pb-3">Email</label>
                  <input
                    placeholder="Email here"
                    type="email"
                    className="p-2 border-solid border-2 outline-none focus:border-orange-400 rounded "
                  ></input>
                </div>

                <div className="grid grid-rows-2 col-span-2">
                  <label className="font-semibold pb-3">Phone</label>
                  <input
                    placeholder="Phone number"
                    type="number"
                    className="p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded "
                  ></input>
                </div>
                <label htmlFor="" className="font-semibold">
                  Message
                </label>
                <textarea
                  typeof="2xl"
                  rows={4}
                  placeholder="Write your notes or question here..."
                  className="p-2 md:col-span-2 border-solid border-2 outline-none focus:border-orange-400 rounded"
                ></textarea>
                <div className="md:col-span-2">
                  <button
                    className="font-semibold px-6 py-3 bg-black text-white rounded hover:bg-white hover:text-black w-full"
                    type="submit"
                  >
                    Send a Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
