import React from "react";

// Exporting both ToDoList and ToDoListItem from this file
export function ToDoList({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function ToDoListItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}