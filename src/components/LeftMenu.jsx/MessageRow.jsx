import React from "react";

const MessageRow = () => {
  return (
    <>
    
      <div className="bg-gradient-to-r from-teal-400 to-yellow-200 flex min-w-[70%] mx-auto py-2 min-h-[100px] rounded-lg mb-10 cursor-pointer">
        <div className="min-w-[20%] flex justify-center items-center">
          <img
            className="rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaifzUZJLUmxaUw-2o5suQL4WDtNGc0RoSfSbfuv2mg&s"
            alt="Profile Image"
            height="10px"
            width="70px"
          />
        </div>
        <div className="w-auto md:min-w-[80%] flex flex-col py-5 gap-1 px-5 min-h-[60%] rounded-lg  ">
          <h6 className="font-bold">Mathew Uncle</h6>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </div>
      </div>
    
    </>
  );
};

export default MessageRow;
