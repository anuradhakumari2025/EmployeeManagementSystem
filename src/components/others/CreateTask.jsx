import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
  const [userData,setUserData] = useContext(AuthContext)
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log()
    setNewTask({
      taskDate,
      taskDescription,
      taskTitle,
      assignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    // console.log(userData)
    const data = userData;
    // console.log("hi")
    console.log(data);

    data.forEach((elem) => {
      if (assignTo == elem.name) {
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
        console.log(elem);
      }
    });
    // localStorage.setItem("employess",JSON.stringify(data))
    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="bg-[#1c1c1c]  justify-between w-full mt-8  flex text-white px-10 py-2 gap-[15rem]"
    >
      <div className="w-1/2 h-full space-y-4">
        <div className="space-y-">
          <h1 className="font-medium text-lg">Task Title</h1>
          <input
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            className="text rounded-xl w-full py-2 px-4 outline-none border-2 bg-transparent"
            placeholder="Web dev,App dev"
            type="text"
          />
        </div>
        <div className="space-y-">
          <h1 className="font-medium text-lg">Date</h1>
          <input
            value={taskDate}
            onChange={(e) => {
              setTaskDate(e.target.value);
            }}
            className="text rounded-xl w-full py-2 px-4 outline-none border-2 bg-transparent"
            placeholder="dd/mm/yyyy"
            type="date"
          />
        </div>
        <div className="space-y-">
          <h1 className="font-medium text-lg">Assign To</h1>
          <input
            value={assignTo}
            onChange={(e) => {
              setAssignTo(e.target.value);
            }}
            className="text rounded-xl w-full py-2 px-4 outline-none border-2 bg-transparent"
            placeholder="Employee Name"
            type="text"
          />
        </div>
        <div className="">
          <h1 className="font-medium text-lg">Category</h1>
          <input
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="text rounded-xl w-full py-2 px-4 outline-none border-2 bg-transparent"
            placeholder="Web dev,App dev"
          />
        </div>
      </div>
      <div className="w-1/2 h-full space-y-">
        <h1 className="font-medium text-lg">Description</h1>
        <textarea
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          type="text"
          className="bg-transparent outline-none border-2 rounded-lg w-full p-4 h-60"
        />
        <button className="bg-emerald-500 rounded-lg w-full py-3 text-lg font-">
          Create Task
        </button>
      </div>
    </form>
  );
}

export default CreateTask;
