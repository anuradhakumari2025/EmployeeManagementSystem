import React from "react";

function CompleteTask({ data }) {
  return (
    <div
      className="flex-shrink-0 w-[25%] h-full rounded-2xl px-5 py-8 relative"
      style={{
        background: "linear-gradient(to right, #c94b4b, #4b134f)",
      }}
    >
      <div className="flex justify-between items-center">
        <h1
          className="text-normal font-medium px-3 rounded-md py-1 text-white"
          style={{
            background: "linear-gradient(to bottom, #D3daa0, #b20a2c)",
          }}
        >
          {data.category}
        </h1>
        <h2 className="font-medium text-lg">{data.taskDate}</h2>
      </div>
      <h1 className="font-semibold text-2xl mt-4">Good Looking</h1>
      <p className="my-4 font-medium text-sm">{data.taskDescription}</p>
      <div className="flex justify-center absolute top-[80%] w-[85%] max-auto">
        <button
          className="w-full p-2 rounded text-white"
          style={{
            background: "linear-gradient(to top, #0f0c29, #302b63, #24243e)",
          }}
          
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
