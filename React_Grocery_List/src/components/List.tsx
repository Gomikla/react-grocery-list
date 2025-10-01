import { useState } from "react";
import { FilterType, type ShoppingItem } from "../types";
import ListItem from "./ListItem";
import useLocalStorage from "../hooks/useLocalStorage";
import { messages } from "../messages";
import Filter from "./Filter";
import { addItem, filterAndSortItems } from "../utils/helpers";

export default function List() {
  const [items, setItems] = useLocalStorage("shopping:list", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState(FilterType.All);

  const filteredAndSortedItems = filterAndSortItems(items, filter);

  const onDelete = (id: string) => {
    setItems((prevItems: ShoppingItem[]) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem(input, setItems, setInput);
  };

  const onToggleComplete = (id: string) => {
    setItems((prevItems: ShoppingItem[]) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="app-container">
      <div className="filter-container">
        <Filter currentFilter={filter} onFilterChange={setFilter} />
      </div>

      <div className="list-container">
        {items.length === 0 ? (
          <p>{messages.emptyList}</p>
        ) : (
          <div className="todo-list">
            {filteredAndSortedItems.map((item: ShoppingItem) => (
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
