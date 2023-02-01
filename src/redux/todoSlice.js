import { createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        filter : 'all'
    },
    reducers: {
        addTodo(state, action){
            state.todos.push({
                id: new Date().valueOf(),
                title: action.payload,
                completed: false,
                edit: false,
            })
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleCheckboxValue(state, action){
            const toggledTodo = state.todos.find(todo => todo.id === action.payload)
            toggledTodo.completed = !toggledTodo.completed

            if(toggledTodo.completed){
                state.todos = state.todos.filter(todo => todo.id !== action.payload)
                state.todos.push(toggledTodo)
            }

            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        sorting(state,action){
            for(let i = 0; i<state.todos.length; i++){
                for(let j = 0; j<i; j++){
                    if(!state.todos[i].completed){
                        if(state.todos[j].completed){
                            [state.todos[i],state.todos[j]]=[state.todos[j],state.todos[i]]
                        }
                    }
                }
            }
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        filtering(state,action){
                if(action.payload === 'all'){
                    state.filter = 'all'
                }else if(action.payload === 'todo'){
                    state.filter = 'todo'
                }else if(action.payload === 'done'){
                    state.filter = 'done'
                }
        },
        enableEditTask(state, action){
            const editedTodo = state.todos.find(todo => todo.id === action.payload)
            editedTodo.edit = !editedTodo.edit
            
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        editTask(state, action){
            const editedTodo = state.todos.find(todo => todo.id === action.payload[0])
            editedTodo.title = action.payload[1]
            
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }
    }
})

export const {addTodo, deleteTodo, toggleCheckboxValue, sorting, filtering, enableEditTask, editTask} = todoSlice.actions;

export default todoSlice.reducer;