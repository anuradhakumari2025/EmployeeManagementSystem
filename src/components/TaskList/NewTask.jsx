import React from "react";

function NewTask({ data }) {
  return (
    <div className="bg-rose-400 w-[25%] h-full rounded-2xl px-5 py-8 flex-shrink-0 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-normal px-3 py-1"
        style={{
          background: "linear-gradient(to left, #cb2d3e, #ef473a)",
        }}
        >{data.category}</h1>
        <h2 className="font-medium text-lg">{data.taskDate}</h2>
      </div>
      <h1 className="font-semibold text-2xl mt-4">{data.taskTitle}</h1>
      <p className="my-4 font-medium text-sm">{data.taskDescription}</p>
      <div className="flex justify-between absolute top-[80%] w-[85%]">
        <button className="bg-green-700 p-2">Mark as Complete</button>
        <button className="bg-red-600 p-2">Mark as Failed</button>
      </div>
    </div>
  );
}

export default NewTask;
