import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Check from './components/Check';       
import CreateTodoField from './components/CreateTodoField'; 
import Home from './components/Home';
import Layout from './components/Layout';      
import Notebook from './components/NoteBook'; 
import Todoitem from './components/Todoitem';  


const App = () => {
  return (
    <Router>
      <nav>
        
      <Link to="/home">CheckList</Link>
        <Link to="/notebook">NoteBook</Link>
      </nav>
      <Routes>
        
      <Route path="/home" element={<Home />} />
        <Route path="/NoteBook" element={<Notebook />} />
      </Routes>
    </Router>
  );
};
export default App;
