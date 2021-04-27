import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Walk the dog",
      day: "Tomorrow",
      reminder: true,
    },
    {
      id: 2,
      text: "Watch the game",
      day: "Tomorrow",
      reminder: true,
    },
  ]);

  // Delete task, then send it as a prop to Task.js, then call
  // the function from there.
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); //deleting the task with the id
  };

  //toggle reminder by double click
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks available"
      )}
    </div>
  );
}

export default App;
