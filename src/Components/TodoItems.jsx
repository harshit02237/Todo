import styles from './todoItems.module.css';
import AppD from "./AppD";

const TodoItems = ({ todoItems, onDeleteClick}) => {
    return (
        <div className={styles.items}>
            {todoItems.map(item => <AppD todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></AppD>)}
        </div>
    );
};

export default TodoItems;
