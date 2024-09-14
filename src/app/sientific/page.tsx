import { booksData } from "@/data/bookData";
import React from "react";

function page() {
  const data = booksData;

  return (
    <>
      <div className=" mx-auto justify-center text-center p-4  bg-[#A5F1C4]">
        <h1 className="text-4xl font-bold pt-10 text-[#233129]"> Scientific Books </h1>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 p-10 bg-[#74F5A8]">
        {data.map((i) => (
          <>
            <div className="p-2 lg:p-4 text-center  border-spacing-1 mx-auto">
              <div className="border shadow-lg hover:bg-slate-100 h-[300px] w-[320px] object-contain overflow-hidden ">
                <img
                  className="hover:p-2 duration-300  transition-all"
                  src={i.image}
                  alt="book.pic"
                />
              </div>
              <div className=" text-left pl-2 pt-2">
                <label className="font-medium" htmlFor="">
                  Name:
                </label>
                {i.name}
              </div>
              <div className="text-left pl-2">
                <label className="font-medium" htmlFor="">
                  Author:
                </label>
                {i.author}
              </div>
              <div className="text-left p-2 pb-3">
                <label className="font-medium" htmlFor="">
                  Description:
                </label>
                {i.description}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default page;
