import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function TodoPage() {
    let {id} = useParams();
    const todos = useSelector(state => state.todos.todos);
    const todo = todos.find(todo => todo.id === id.trim())
    return (
        <>  
            <span>{todo.title}</span>
        </>
    )
}
export default TodoPage;