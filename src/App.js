import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import TodoList from "./components/TodoList";
import TodoPage from "./components/TodoPage";



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/todos' element={<TodoList/>}/>
        <Route path='/todos/:id' element={<TodoPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;
