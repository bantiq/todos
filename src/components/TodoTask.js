import { useDispatch } from "react-redux";
import { deleteTodo, sorting, toggleCheckboxValue } from "../redux/todoSlice";

function TodoTask({title, id, completed, visibility}) {
    const dispatch = useDispatch();
    return (
        <li style={{display: visibility ? 'block' : 'none'}}>
            <input type='checkbox' checked={completed} onChange={() => {
                                dispatch(toggleCheckboxValue(id));
                                dispatch(sorting());
            }}/>
            <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</span>
            <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
        </li>
    )
}

export default TodoTask;