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
            <div className="edit">
                <Link to={'/todos'} style={{textDecoration: 'none', color: 'blue'}}>
                    <button className="home__btn">
                    Back
                    </button>
                </Link>
                <div className="edit">
                    {todo.edit ? 
                        <input type='text' value={todo.title} className='edit-input' onChange={(e) => {dispatch(editTask([todo.id, e.target.value]))}}/> :
                        <span>{todo.title}</span>                
                    }
                    <button className="edit-btn" onClick={() => {dispatch(enableEditTask(todo.id))}}>
                        <i class="fa-solid fa-pen"></i>
                        Edit
                    </button>
                </div>
            </div>
        </>
    )
}
export default TodoPage;