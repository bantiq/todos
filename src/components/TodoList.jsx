import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTodo, sorting, filtering } from '../redux/todoSlice'
import TodoTask from './TodoTask';
import '../scss/TodoList.scss'



function TodoList(){
    const [inputValue, setInputValue] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const filter = useSelector(state => state.todos.filter)
    const dispatch = useDispatch();
    
    return (
        <div style={{height: '100vh'}}> 
            <Link to={'/'} style={{textDecoration: 'none', color: 'blue'}}>
                <button className='home__btn'>
                Go Home
                </button>
            </Link>
            
            <div className='todo__adding'>
                <input
                    className='todo__input'
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                />
                <button
                    disabled={!inputValue}
                    style={{cursor: inputValue ? 'pointer' : 'default'}}
                    className='todo__btn_add'
                    onClick={() => {
                        dispatch(addTodo(inputValue));
                        dispatch(sorting());
                        setInputValue('');
                    }
                }
                >ADD TODO
                </button>
            </div>
            <div className='filter'>
                <button className={filter === 'all' ? 'active' : null} onClick={() => dispatch(filtering('all'))}>All</button>
                <button className={filter === 'todo' ? 'active' : null} onClick={() => dispatch(filtering('todo'))}>Todo</button>
                <button className={filter === 'done' ? 'active' : null} onClick={() => dispatch(filtering('done'))}>Done</button>
            </div>
            <div className='todo__list'>
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
            </div>
        </div>
    )
}

export default TodoList;