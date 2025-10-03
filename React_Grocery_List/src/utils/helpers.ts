import { type ShoppingItem, FilterType } from "../types";
import { messages } from "../messages";

export const addItem = (
  input: string,
  setItems: (updater: (prevItems: ShoppingItem[]) => ShoppingItem[]) => void,
  setInput: (value: string) => void
) => {
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

  if (trimmedInput.length > 50) {
    alert(messages.longInputAlert);
    return;
  }

  setItems((prevItems: ShoppingItem[]) => [newItem, ...prevItems]);
  setInput("");
};

export const filterAndSortItems = (
  items: ShoppingItem[],
  filter: string,
  searchInput: string
): ShoppingItem[] => {
  return items
    .filter((item: ShoppingItem) => {
      // First filter by completion status
      if (filter === FilterType.All) return true;
      if (filter === FilterType.Active) return !item.completed;
      if (filter === FilterType.Completed) return item.completed;
      return true;
    })
    .filter((item: ShoppingItem) => {
      // Then filter by search text
      if (!searchInput.trim()) return true;
      return item.text.toLowerCase().includes(searchInput.toLowerCase());
    })
    .sort((a: ShoppingItem, b: ShoppingItem) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1; // incomplete first
    });
};
