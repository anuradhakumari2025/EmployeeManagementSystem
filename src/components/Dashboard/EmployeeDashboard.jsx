import React from "react";
import Header from "../others/Header";
import TaskNum from "../others/TaskNum";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard(props) {
  return (
    <>
      <div className="w-full h-screen py-6 px-10 text-white">
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskNum data={props.data} />
        <TaskList data={props.data}/>
      </div>
    </>
  );
}

export default EmployeeDashboard;
