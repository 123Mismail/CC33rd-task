"use client";
import Image from "next/image";
import { url } from "inspector";
import { ChevronLeft, ChevronRight } from "react-feather";
import React, { useEffect, useState } from "react";
import Crousel from "./Crousel";
// const autoPlay=true
const crouselImg = [
  "https://images.pexels.com/photos/16647742/pexels-photo-16647742/free-photo-of-books-on-shelves-in-library.jpeg",
  "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3952090/pexels-photo-3952090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3952078/pexels-photo-3952078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function Herosection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-4">
      <div className="w-full p-6 text-center">
        <h1 className="text-4xl font-bold w-3/4 p-4 ">
          {" "}
          Books Shell Tells About A Men
        </h1>
        <p className="pt-3 text-lg font-normal w-3/4 p-4">
          “I have a passion for teaching kids to become readers, to become
          comfortable with a book, not daunted. Books shouldn’t be daunting,
          they should be funny, exciting and wonderful; and learning to be a
          reader gives a terrific advantage.”
        </p>
        <h2 className="text-4xl font-bold w-3/4 p-4 ">
          Books Are The Best Friends <br/>
          Because Whatever Happens It Never <br/>
          Left You Alone
        </h2>
      </div>

      <div className="w-full  object-contain p-6     ">
        <Crousel>
          {crouselImg.map((img) => (
            <img src={img} className="  h-full w-full   object-fill" />
          ))}
        </Crousel>
      </div>
    </div>
  );
}

export default Herosection;
