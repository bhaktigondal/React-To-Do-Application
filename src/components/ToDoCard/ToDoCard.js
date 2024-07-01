import React from "react";
import "./ToDoCard.css";

function ToDoCard({ task, category }) {
  const category_emoji_map = {
    learning: "📚",
    work: "🧑🏻‍💻",
    personal: "👤",
    shopping: "🛒",
    health: "🧘🏻‍♀️",
    others: "⭕",
  };

  const category_colors = {
    learning: "#008000", // Green
    work: "#808080", // Grey
    personal: "#FF0000", // Yellow
    shopping: "#FFC0CB", // Red
    health: "#87CEEB", // Pink
    others: "#800080", // Purple
  };

  return (
    <div className="to-do-card">
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
