import TasksHeader from "./tasks/TaskHeader"
import { TaskForm } from "./tasks/TaskForm"
import TasksList from "./tasks/TasksList"

function App() {
  return (
    <>
    <div className="container">
      <article>
        <TasksHeader />
        <TasksList/>
        <footer>
          <TaskForm />
        </footer>
      </article>
    </div>
     
       
    </>
  )
}

export default App
