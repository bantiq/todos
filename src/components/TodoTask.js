import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, sorting, toggleCheckboxValue } from "../redux/todoSlice";

function TodoTask({title, id, completed}, filter) {
    const dispatch = useDispatch();
    return (
            <li>
                <input type='checkbox' checked={completed} onChange={() => {
                                    dispatch(toggleCheckboxValue(id));
                                    dispatch(sorting());
                }}/>
                <Link to={id + ''}>
                    <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</span>
                </Link>
                <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
            </li>
    )
}

export default TodoTask;