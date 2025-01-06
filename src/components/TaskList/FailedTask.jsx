import React from "react";

function FailedTask({ data }) {
  return (
    <div className="flex-shrink-0 w-[25%] h-full rounded-2xl px-5 py-8 relative"
    style={{
      background: "linear-gradient(to left, #20002c, #cbb4d4)",
    }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-normal px-3 py-1"
        style={{
          background: "linear-gradient(to left, #de6161, #2657eb)",
        }}
        >{data.category}</h1>
        <h2 className="font-medium text-lg">{data.taskDate}</h2>
      </div>
      <h1 className="font-semibold text-2xl mt-4">{data.taskTitle}</h1>
      <p className="my-4 font-medium text-sm">{data.taskDescription}</p>
      <div className="flex justify-center absolute top-[80%] w-[85%]">
        <button className="w-full p-2"
        style={{
          background: "linear-gradient(to left, #200122, #6f0000)",
        }}
        >Failed</button>
      </div>
    </div>
  );
}

export default FailedTask;
