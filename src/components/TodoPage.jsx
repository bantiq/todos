import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editTask, enableEditTask } from "../redux/todoSlice";

function TodoPage() {
    let {id} = useParams();
    const todos = useSelector(state => state.todos.todos);
    // eslint-disable-next-line
    const todo = todos.find(todo => todo.id == id.trim());
    const dispatch = useDispatch();
    

    return (
        <>  
            <Link to={'/todos'} style={{textDecoration: 'none', color: 'blue'}}>
                <button className="home__btn">
                Back
                </button>
            </Link>
            {todo.edit ? 
                <input type='text' value={todo.title} onChange={(e) => {dispatch(editTask([todo.id, e.target.value]))}}/> :
                <span>{todo.title}</span>                
            }
            <button onClick={() => {dispatch(enableEditTask(todo.id))}}>
                Edit
            </button>
        </>
    )
}
export default TodoPage;