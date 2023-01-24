import { createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
    },
    reducers: {
        addTodo(state, action){
            state.todos.push({
                id: crypto.randomUUID(),
                title: action.payload,
                completed: false,
                visibility: 'true',
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
            console.log(action.payload);
                if(action.payload === 'all'){
                    state.todos[1].visibility = !state.todos[1].visibility
                }
                if(action.payload === 'todo'){
                    state.todos = state.todos.map(todo => todo.completed ? todo.visibility = 'false' : todo.visibility = 'true')
                }
                if(action.payload === 'done'){
                    state.todos = state.todos.map(todo => todo.completed ? todo.visibility = 'true' : todo.visibility = 'false')
                }
        }
      }
})

export const {addTodo, deleteTodo, toggleCheckboxValue, sorting, filtering} = todoSlice.actions;

export default todoSlice.reducer;