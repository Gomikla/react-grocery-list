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
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggleComplete(item.id);
    }
  };

  const handleDeleteKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onDelete(item.id);
    }
  };

  return (
    <div
      className={`todo-item ${item.completed ? "completed" : "incomplete"}`}
      onClick={() => onToggleComplete(item.id)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <span
        className={`todo-text ${item.completed ? "completed" : "incomplete"}`}
      >
        {item.text}
      </span>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(item.id);
        }}
        onKeyDown={handleDeleteKeyDown}
        aria-label={`Delete ${item.text}`}
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
        </svg>
      </button>
    </div>
  );
}
