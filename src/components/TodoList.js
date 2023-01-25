import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTodo, sorting, filtering } from '../redux/todoSlice'
import TodoTask from './TodoTask';



function TodoList(){
    const [inputValue, setInputValue] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const filter = useSelector(state => state.todos.filter)
    const dispatch = useDispatch();
    
    return (
        <> 
            <button>
                <Link to={'/'} style={{textDecoration: 'none', color: 'blue'}}>Go Home</Link>
            </button>
            <input
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
            />
            <button onClick={() => {
                dispatch(addTodo(inputValue));
                dispatch(sorting());
                setInputValue('');
            }}
            >Add Todo
            </button>
            <button onClick={() => dispatch(filtering('all'))}>All</button>
            <button onClick={() => dispatch(filtering('todo'))}>Todo</button>
            <button onClick={() => dispatch(filtering('done'))}>Done</button>
            <ul>
                {
                    // eslint-disable-next-line
                    todos.map((todo) => {
                        if(filter === 'all'){
                        return (<TodoTask
                            key={todo.id}
                            {...todo}
                            filter={filter}
                        />)} else if(filter === 'done'){
                            if(todo.completed){
                                return (<TodoTask
                                    key={todo.id}
                                    {...todo}
                                    filter={filter}
                                />)
                            }} else if(!todo.completed){
                                return (<TodoTask
                                    key={todo.id}
                                    {...todo}
                                    filter={filter}
                                />)
                            }
                    })
                }
            </ul>
        </>
    )
}

export default TodoList;