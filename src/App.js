
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Escape from './component/Escape room/Escape';
import Instruction from './component/Instructions/Instructions'


function App() {
  return (
    <Routes>
      <Route path='/'  element={<Instruction/>} />
      <Route path='/escaperoom'  element={<Escape/>} />
    </Routes>
  );
}

export default App;
