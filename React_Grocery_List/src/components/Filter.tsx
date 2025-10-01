import "../styles.css";
import { FilterType } from "../types";

type FilterProps = {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
};

export default function Filter({ currentFilter, onFilterChange }: FilterProps) {
  return (
    <div className="filter-container">
      <button
        className={`filter-btn ${
          currentFilter === FilterType.All ? "active" : ""
        }`}
        onClick={() => onFilterChange(FilterType.All)}
      >
        All
      </button>
      <button
        className={`filter-btn ${
          currentFilter === FilterType.Active ? "active" : ""
        }`}
        onClick={() => onFilterChange(FilterType.Active)}
      >
        Active
      </button>
      <button
        className={`filter-btn ${
          currentFilter === FilterType.Completed ? "active" : ""
        }`}
        onClick={() => onFilterChange(FilterType.Completed)}
      >
        Completed
      </button>
    </div>
  );
}
