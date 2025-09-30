import type { ShoppingItem } from "../types";
import "../styles.css";

type ListItemProps = {
  item: ShoppingItem;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
};

export default function ListItem({
  item,
  onDelete,
  onToggleComplete,
}: ListItemProps) {
  return (
    <div
      className={`todo-item ${item.completed ? "completed" : "incomplete"}`}
      onClick={() => onToggleComplete(item.id)}
    >
      <span
        className={`todo-text ${item.completed ? "completed" : "incomplete"}`}
      >
        {item.text}
      </span>
      <button
        className="delete-btn"
        onClick={() => onDelete(item.id)}
        aria-label={`Delete ${item.text}`}
      >
        ×
      </button>
    </div>
  );
}
