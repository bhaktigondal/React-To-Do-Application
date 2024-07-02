import React, { useEffect, useState } from "react";
import "./Home.css";
import addIcon from "./add.png";
import ToDoCard from "../../components/ToDoCard/ToDoCard";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);

  useEffect(() => {
    if (todoList.length === 0) return;
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function deleteItem(index) {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this task",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodoList = todoList.filter((item, i) => i !== index);
        setTodoList(newTodoList);
      }
    });
  }

  return (
    <div>
      <h1 className="app-title">To Do Application 📝</h1>
      <div className="to-do-list-container">
        {todoList.map((todoItem, i) => {
          const { task, category } = todoItem;
          return (
            <ToDoCard
              key={i}
              index={i}
              task={task}
              category={category}
              deleteItem={deleteItem}
            />
          );
        })}
        {todoList.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            No task added, please add a new task.
          </p>
        ) : null}
      </div>
      <div className="to-do-item-container">
        <input
          type="text"
          placeholder="Add New Task"
          className="add-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="learning">Learning</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
          <option value="others">Others</option>
        </select>

        <img
          src={addIcon}
          className="add-icon"
          alt="Add"
          onClick={() => {
            if (newTask === "") {
              toast.error("Task cannot be empty!");
              return;
            }
            if (category === "") {
              toast.error("Category cannot be empty!");
              return;
            }
            setTodoList([...todoList, { task: newTask, category: category }]);
            setNewTask("");
            setCategory("");
            toast.success("Task added successfully!");
          }}
        />
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default Home;
