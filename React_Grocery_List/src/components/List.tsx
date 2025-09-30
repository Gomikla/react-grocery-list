import { useState } from "react";
import type { ShoppingItem } from "../types";
import ListItem from "./ListItem";
import useLocalStorage from "../hooks/useLocalStorage";
import { messages } from "../messages";

export default function List() {
  const [items, setItems] = useLocalStorage("shopping:list", []);
  const [input, setInput] = useState("");

  const addItem = () => {
    const trimmedInput = input.trim();
    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      text: trimmedInput,
      completed: false,
    };

    if (!trimmedInput) {
      alert(messages.emptyInputAlert);
      return;
    }

    if (trimmedInput.length >= 25) {
      alert(messages.longInputAlert);
      return;
    }

    setItems((prevItems: ShoppingItem[]) => [newItem, ...prevItems]);
    setInput("");
  };

  const onDelete = (id: string) => {
    setItems((prevItems: ShoppingItem[]) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem();
  };

  const onToggleComplete = (id: string) => {
    setItems((prevItems: ShoppingItem[]) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const sortedItems = items.sort((a: ShoppingItem, b: ShoppingItem) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1; // incomplete first
  });

  return (
    <div>
      <div className="list-container">
        {items.length === 0 ? (
          <p>{messages.emptyList}</p>
        ) : (
          <div className="todo-list">
            {sortedItems.map((item: ShoppingItem) => (
              <ListItem
                item={item}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </div>
        )}
      </div>

      <form onSubmit={onSubmit} className="form-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={messages.inputPlaceholder}
          className="add-input"
        />
        <button type="submit" className="add-btn">
          {messages.addButton}
        </button>
      </form>
    </div>
  );
}
