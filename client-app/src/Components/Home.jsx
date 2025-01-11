import { useState, useEffect } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsFillCheckCircleFill,
  BsCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get("http://localhost:3000/api/Task");
        setTasks(response.data);
        console.log(tasks);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTasks();
  }, []);

  async function markTask(taskId) {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/Task/${taskId}`
      );
      console.log(response);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTask(taskId) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/Task/${taskId}`
      );
      console.log(response);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="home">
      <h2>Tasks List</h2>
      <Create />
      {tasks.length === 0 ? (
        <div className="task">
          <h2>No Task</h2>
        </div>
      ) : (
        tasks.map((task) => (
          <div className="task" key={task._id}>
            <div className="checkbox">
              {task.completed ? (
                <BsFillCheckCircleFill
                  className="icon"
                  onClick={() => markTask(task._id)}
                />
              ) : (
                <BsCircleFill
                  className="icon"
                  onClick={() => markTask(task._id)}
                />
              )}
              <p className={task.completed ? "lineThrough" : ""}>{task.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill
                  className="icon"
                  onClick={() => deleteTask(task._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
