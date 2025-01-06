import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTasks() {
  const [userData,setUserData] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] w-full py-4 px-10 space-y-2 mt-4 mb-10 ">
      <div className="w-full bg-teal-500 rounded text-white px-6 py-2 flex justify-between items-center text-lg font-medium">
        <h1 className="w-1/5 b-teal-300">Employee Name</h1>
        <h2 className="w-1/5 b-yellow-400">New Task</h2>
        <h5 className="w-1/5 b-green-500">Active Task</h5>
        <h5 className="w-1/5 b-green-500">Completed Task</h5>
        <h5 className="w-1/5 b-green-500">Failed Task</h5>
      </div>
      <div className="w-full pb-4 space-y-2">
        {userData.map((elem, idx) => {
          return (
            <div className="w-full b-emerald-400 rounded text-white px-6 py-2 flex justify-between items-center text-lg font-regular border-2" key={idx}>
              <h1 className="w-1/5 text-white" >
                {elem.name}
              </h1>
              <h2 className="w-1/5 text-blue-900">
                {elem.taskNumbers.newTask}
              </h2>
              <h5 className="w-1/5 text-yellow-500">
                {elem.taskNumbers.active}
              </h5>
              <h5 className="w-1/5 text-green-500">
                {elem.taskNumbers.completed}
              </h5>
              <h5 className="w-1/5 text-red-500">{elem.taskNumbers.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTasks;
