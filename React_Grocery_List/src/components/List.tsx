import { useState } from "react";
import type { ShoppingItem } from "../types";
import ListItem from "./ListItem";
import useLocalStorage from "../hooks/useLocalStorage";

export default function List() {
    const [items, setItems] = useLocalStorage("shopping:list", []);
    const [input, setInput] = useState("")
    
    const addItem = () => {
        const trimmedInput = input.trim();
        const newItem: ShoppingItem = { id: Date.now().toString(), text: trimmedInput };

        if (!trimmedInput) return;

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
        <>
            <div style={{ border: "2px solid black", padding: "0.5rem", borderRadius: "10px", width: "100%", maxWidth: "400px", margin: "0 auto" }}>
                {items.length === 0 ? (
                    <p>No items in the list</p>
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
                style={{ 
                    marginTop: "0.625rem", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center" 
                }}
            >
                <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Add a new item" 
                    style={{ marginBottom: "0.5rem", width: "80%" }}
                />
                <button type="submit" style={{ width: "50%", height: "2rem", borderRadius: "10px", border: "1px solid black" }}>Add</button>
            </form>
        </>
    )
}