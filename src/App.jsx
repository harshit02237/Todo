import AppName from "./Components/AppName";
import AppInput from "./Components/AppInput";
// import AppD from "./Components/AppD";
import TodoItems from "./Components/TodoItems";
import Welcome from "./Components/Welcome.jsx";
import "./App.css";
import {useState} from "react";

function App() {
    const [todoItems, setTodoItems] = useState([]);
    const handleNewItem = (itemName, itemDueDate) => {
        console.log(`New Item Added: ${itemName} ${itemDueDate}`);
        const newTodoItems = [...todoItems, {
            name: itemName,
            dueDate: itemDueDate,
        },
        ];
        setTodoItems(newTodoItems);
    }

    const handleDeleteItem = (todoItemName) => {
        const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
        setTodoItems(newTodoItems);
        // console.log(`Item Deleted ${todoItemName}`);
    }

    return (
        // <Container>
        <center className="Container-Text-Center">
            <AppName />
            <AppInput onNewItem = {handleNewItem}/>
            {todoItems.length === 0 && <Welcome/>}
            <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
        </center>
    //</Container>
    );
}

export default App;
