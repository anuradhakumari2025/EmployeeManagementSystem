import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

function TaskList({ data }) {
  return (
    <div className="taskList w-full h-[55%] mt-16 px-2 flex justify-start gap-6 overflow-x-auto">
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem}/>;
        }  if (elem.completed) {
          return <CompleteTask key={idx} data={elem}/>;
        }  if (elem.failed) {
          return <FailedTask key={idx} data={elem}/>;
        } if (elem.newTask) {
          return <NewTask key={idx} data={elem}/>;
        }
      })}
    </div>
  );
}

export default TaskList;
