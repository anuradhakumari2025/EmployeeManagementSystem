import React from "react";

function AcceptTask({ data }) {
  // console.log(data);#879E9A #4C4794
  return (
    <div
      className="flex-shrink-0 w-[25%] h-full rounded-2xl px-5 py-8 relative"
      style={{ background: "linear-gradient(to right, #4c4794, #179E9A)" }}
    >
      <div className="flex justify-between items-center">
        <h1 className="bg-gradient-to-t from-violet-300 to-cyan-500 text-normal font-medium px-3 rounded-md py-1">
          {data.category}
        </h1>
        <h2 className="font-medium text-lg">{data.taskDate}</h2>
      </div>
      <h1 className="font-semibold text-2xl mt-4">{data.taskTitle}</h1>
      <p className="my-4 font-medium text-sm">{data.taskDescription}</p>
      <div className="flex justify-center absolute top-[80%] w-[85%] max-auto">
        <button className="w-full p-2"
        style={{
          background: "linear-gradient(to right, #06be66, #48b1bf)",
        }}
        >
          Accepted
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
