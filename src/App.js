
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Escape from './component/Escape room/Escape';
import CounDown from './component/Escape room/CounDown';
import Instruction from './component/Instructions/Instructions'
import Calender from './component/popup/Calender';
import Briefcase from './component/popup/Briefcase';
import Clock from './component/popup/Clock';
import Doorlock from './component/popup/Doorlock';
import Grid from './component/popup/Grid';
import Laptop from './component/popup/Laptop';
import Mobile from './component/popup/Mobile';
import Monalisa from './component/popup/Monalisa';
import Sticky from './component/popup/Sticky';


function App() {
  return (
    <Routes>
      <Route path='/'  element={<Instruction/>} />
      <Route path='/escaperoom'  element={<Escape/>} />
      <Route path='/coundown'  element={<CounDown/>} />
      <Route path='/popup/Calender'  element={<Calender/>} />
      <Route path='/popup/Briefcase'  element={<Briefcase/>} />
      <Route path='/popup/Clock'  element={<Clock/>} />
      <Route path='/popup/DoorLock'  element={<Doorlock/>} />
      <Route path='/popup/Grid'  element={<Grid/>} />
      <Route path='/popup/Laptop'  element={<Laptop/>} />
      <Route path='/popup/Mobile'  element={<Mobile/>} />
      <Route path='/popup/Monalisa'  element={<Monalisa/>} />
      <Route path='/popup/Sticky'  element={<Sticky/>} />
    </Routes>
  );
}

export default App;
