import { useState } from "react";
import type { ShoppingItem } from "../types";
import ListItem from "./ListItem";
import useLocalStorage from "../hooks/useLocalStorage";
import { messages } from "../messages";

export default function List() {
    const [items, setItems] = useLocalStorage("shopping:list", []);
    const [input, setInput] = useState("")
    
    const addItem = () => {
        const trimmedInput = input.trim();
        const newItem: ShoppingItem = { id: Date.now().toString(), text: trimmedInput };

        if (!trimmedInput) {
            alert(messages.emptyInputAlert);
            return;
        };

        setItems((prevItems: ShoppingItem[]) => [newItem, ...prevItems]);
        setInput("");
    }

    const onDelete = (id: string) => {
        setItems((prevItems: ShoppingItem[]) => prevItems.filter(item => item.id !== id));
    }
    
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addItem();
    }

    return (
        <div>
            <div className="list-container">
                {items.length === 0 ? (
                    <p>{messages.emptyList}</p>
                ) : (
                    <ul className="card-grid">
                        {items.map((item: ShoppingItem) => (
                            <li className="card" key={item.id}>
                                <ListItem item={item} onDelete={onDelete} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <form 
                onSubmit={onSubmit} 
                className="form-container"
            >
                <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder={messages.inputPlaceholder} 
                    className="add-input"
                />
                <button type="submit" className="add-btn">{messages.addButton}</button>
            </form>
        </div>
    )
}