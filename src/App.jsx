import AppName from "./Components/AppName";
import AppInput from "./Components/AppInput";
// import AppD from "./Components/AppD";
import TodoItems from "./Components/TodoItems";
import Welcome from "./Components/Welcome.jsx";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
    // Load from localStorage when the app starts
    const [todoItems, setTodoItems] = useState(() => {
        const savedTodos = localStorage.getItem("todoItems");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // Save to localStorage whenever todoItems changes
    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }, [todoItems]);

    const handleNewItem = (itemName, itemDueDate) => {
        const newTodoItems = [
            ...todoItems,
            {
                name: itemName,
                dueDate: itemDueDate,
            },
        ];
        setTodoItems(newTodoItems);
    };

    const handleDeleteItem = (todoItemName) => {
        const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
        setTodoItems(newTodoItems);
    };

    return (
        <center className="Container-Text-Center">
            <AppName />
            <AppInput onNewItem={handleNewItem} />
            {todoItems.length === 0 && <Welcome />}
            <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
        </center>
    );
}

export default App;
