import TaskItem from "./TasksItem";
import { useTasks } from "./rxjs";

const TasksList = () => {
  const tasks = useTasks();

  return (
    <>
      {tasks.map((t: { id: any }) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;