export type ItemId = string;

export interface ShoppingItem {
  id: ItemId;
  text: string;
  completed: boolean;
}

export const FilterType = {
  All: "all",
  Active: "active",
  Completed: "completed",
};
