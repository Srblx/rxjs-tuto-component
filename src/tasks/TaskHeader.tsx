import { useTasks } from "./rxjs";


const TasksHeader = () => {
  const tasks = useTasks();

  const undoneTasks = tasks.filter((t) => t.done === false).length

  return (
    <>
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks}</strong>
      </p>
    </>
  );
};

export default TasksHeader;
