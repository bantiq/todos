import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import Photos from "./components/Photos";
import TodoList from "./components/TodoList";
import TodoPage from "./components/TodoPage";
import './scss/null.scss'


function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/todos' element={<TodoList/>}/>
        <Route path='/todos/:id' element={<TodoPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path="/photos" element = {<Photos />}/>
      </Routes>
    </div>
  );
}

export default App;
