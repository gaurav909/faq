import React, { useEffect, useState } from "react";
import './App.css'

const Faqitem = ({ faq, index }) => {
  const [isShow ,setShow]= useState(false)

  useEffect(()=>{
if(index==0){
  setShow(true)
}
  },[])
  const handleClick = ()=>{
    setShow((isShow)=>!isShow)
  }
  return (
    <div className="bg-gray-500 m-10 rounded-md text-left p-10 text-cyan-400">
      <div className="font-bold   cursor-pointer flex justify-center  items-center text-lg">
        <button className={isShow?'arrow':''} onClick={handleClick}>
          >
        </button>
        <div>{faq.question}</div>
      </div>
      {
        isShow && <div className="my-2 mr-0  mb-1 ml-20 text-yellow-500 ">{faq.answer}</div>
      }
    </div>
  );
};

export default Faqitem;
