import Image from "next/image";
import MyStyledIcon, { MyIcon } from "./icons/iconNext";
import TailwindSvg from "./icons/iconNext";
import QuizApp from "@/components/QuizApp";
import Heading from "@/components/Heading";

export default function Home() {
  return (<div> 
    <Heading/>
    <QuizApp/>
  </div>  );
}
