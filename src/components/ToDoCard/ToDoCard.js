import React from "react";
import "./ToDoCard.css";
import ImgDel from "./x-mark.png";

function ToDoCard({ index, task, category, deleteItem }) {
  const category_emoji_map = {
    learning: "📚",
    work: "🧑🏻‍💻",
    personal: "👤",
    shopping: "🛒",
    health: "🧘🏻‍♀️",
    others: "⭕",
  };

  const category_colors = {
    learning: "#DCD9D4",
    work: "#DCD9D4",
    personal: "#DCD9D4",
    shopping: "#DCD9D4",
    health: "#DCD9D4",
    others: "#DCD9D4",
  };

  return (
    <div className="to-do-card">
      <img
        src={ImgDel}
        className="delete-image"
        alt="Delete"
        onClick={() => {
          deleteItem(index);
        }}
      />
      {task}
      <span
        className="category"
        style={{
          backgroundColor: category_colors[category],
        }}
      >
        {category_emoji_map[category]} {category}
      </span>
    </div>
  );
}

export default ToDoCard;
