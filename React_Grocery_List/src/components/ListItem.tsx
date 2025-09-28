import type { ShoppingItem } from "../types";
import "../styles.css"

type ListItemProps = {
    item: ShoppingItem;
    onDelete: (id: string) => void;
};

export default function ListItem({ item, onDelete }: ListItemProps) {
    return (
        <label className="row" onClick={() => onDelete(item.id)} aria-label={`Delete ${item.text}`}>
            {item.text}
        </label>
    )
}