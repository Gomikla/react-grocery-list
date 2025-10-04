import { useState, useEffect } from "react";
import { FilterType, type ShoppingItem } from "../types";
import ListItem from "./ListItem";
import useLocalStorage from "../hooks/useLocalStorage";
import { messages } from "../messages";
import Filter from "./Filter";
import { addItem, filterAndSortItems } from "../utils/helpers";
import SearchBar from "./SearchBar";

export default function List() {
  const [items, setItems] = useLocalStorage("shopping:list", []);
  const [listItemInput, setListItemInput] = useState("");
  const [filter, setFilter] = useState(FilterType.All);
  const [searchInput, setSearchInput] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const filteredAndSortedItems = filterAndSortItems(items, filter, searchInput);

  const onDelete = (id: string) => {
    setItems((prevItems: ShoppingItem[]) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem(listItemInput, setItems, setListItemInput);
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
      <div className={`tool-bar ${isSmallScreen ? "small" : ""}`}>
        {!isSmallScreen && (
          <div className="search-container">
            <SearchBar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </div>
        )}

        <div className="filter-container">
          <Filter currentFilter={filter} onFilterChange={setFilter} />
        </div>
      </div>

      <div className="list-container">
        {filteredAndSortedItems.length === 0 ? (
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
          value={listItemInput}
          onChange={(e) => setListItemInput(e.target.value)}
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
