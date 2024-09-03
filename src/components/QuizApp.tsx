"use client";
import { quizData } from "@/data/quizData";
import React, { useRef, useState } from "react";

function QuizApp() {
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(0);
  const [arrData, setquizData] = useState(quizData[data]);
  const [marks, setmarks] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [finishQuiz,setFinishQuiz]=useState(false);
  const [noOfQuestions,setNoOfQuestions]=useState(1)

  const selectedOption = useRef(null);

  const onClickNext = () => {
   
    if (lock) {
       let newnm=noOfQuestions+1;
      setNoOfQuestions(newnm);
      console.log(noOfQuestions,"question no ")
      if(quizData.length===noOfQuestions){
        setFinishQuiz(true);
        return 0;
      }
      let newData = data + 1;
        setData(newData);
        console.log(arrData, "arr data");
        setquizData(quizData[newData]);
        console.log(newData);
      }
      
    setLock(false);
  };



  const onClickOptions = (
    options: any,
    indexOfSelected: any,
    selected: any
  ) => {
     alert(`you select ${options}`)
    if (lock==false) {
     const val= selectedOption.current
      console.log(val,"ref value is getting")
      setIsSelected(false);
      // here we have got the optimizton on when to anable the next button
      console.log(selectedOption.current, "use res value is getting");
      setLock(false);
      console.log("option is selected ..", options);
      // at here we got the index of chosed option
      console.log("index of  selected item..", indexOfSelected);
      if (arrData.correctIndex == indexOfSelected) {
        let nmarks = marks + 1;
        setmarks(nmarks);
       
        console.log("selected a right option...");
      }else{
      
      }
    }
    setLock(true);
  };

  return (
    <>

      <div className="mx-auto lg:max-w-[40vw] w-full sm:pl-3  border   flex  h-[400px] text-left justify-center  ">
       {finishQuiz===false?<>
       
   
        <div className="lg:pt-3 pl-4 w-full pr-2 ">
       



          <h2 className="pt-3 text-xl font-medium">
            {" "}
            <span>{arrData.id}:</span> {arrData.question}
          </h2>
          <ul className="gap-y-6 mt-3  sm:pl-2 sm:pr-2">
            <li
              className={`text-lg font-normal cursor-pointer border mt-2 p-2}`}
              ref={selectedOption}
              onClick={() =>
                onClickOptions(
                  arrData.options[0],
                  arrData.options.indexOf(arrData.options[0]),
                  setIsSelected((pre) => !pre)

                )
              }
            >
              {arrData.options[0]}
            </li>
            <li
              className={`text-lg font-normal cursor-pointer border mt-2 p-2`}
              ref={selectedOption}
              onClick={() =>
                onClickOptions(
                  arrData.options[1],
                  arrData.options.indexOf(arrData.options[1]),
                  setIsSelected((pre) => !pre)
                )
              }
            >
              {arrData.options[1]}
            </li>
            <li
              ref={selectedOption}
              className={`text-lg font-normal cursor-pointer border mt-2 p-2 `}
              onClick={() =>
                onClickOptions(
                  arrData.options[2],
                  arrData.options.indexOf(arrData.options[2]),
                  setIsSelected((pre) => !pre)
                )
              }
            >
              {arrData.options[2]}
            </li>
            <li
              className={`text-lg font-normal cursor-pointer border mt-2 p-2 `}
              // ref={selectedOption}
              onClick={() =>
                onClickOptions(
                  arrData.options[3],
                  arrData.options.indexOf(arrData.options[3]),
                  setIsSelected((pre) => !pre)
                )
              }
            >
              {arrData.options[3]}
            </li>
          </ul>
          <div className="pt-3">
            <button
              className="px-6 py-2 rounded-lg bg-blue-900 text-white"
              onClick={onClickNext}
            >
              Next{" "}
            </button>
            <div className="text-xl mt-2">
              questions   {arrData.id} out of {quizData.length}
            </div>
          </div>
        </div>
       
       </>:<>
       <div>
        
        <h2 className="p-4 text-xl text-center font-medium mt-6">Result </h2>
        {marks>3?<>
        <div className="h-[300px] mt-6 text-2xl bg-blue-100">
          <h1 className="text-2xl text-center p-4 text-green-600 font-medium">
            Congratulations You are Pass!
          </h1>
          <h1 className="p-4 text-center">You have scored {marks}/{quizData.length}</h1>
          <h1 className="text-2xl font-medium text-orange-700 text-center">Best Of Luck! </h1>
        </div>
        
        </>:<>
        <h1 className="p-3 text-xl font-normal text-red-400">Sorry You are Failed Best Of Luck For next Time !!</h1>
        <h2 className="p-4 text-xl font-medium mt-6">  Your score is {marks}/{quizData.length}</h2>
        </>}
        

       </div>
       </>}
       
       
      </div>
    </>
  );
}

export default QuizApp;
