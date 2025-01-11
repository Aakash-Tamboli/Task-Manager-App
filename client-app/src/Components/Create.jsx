import { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState();
  const addTask = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/Task", {
        task,
      });
      console.log(response);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="createForm">
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="button" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default Create;
