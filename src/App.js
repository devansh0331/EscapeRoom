import { AuthProvider } from "./context/AuthContext";
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
import Bookshelf from './component/popup/Bookshelf';
import MobileRiddle from './component/popup/MobileRiddle';
import LaptopRiddle from './component/popup/LaptopRiddle';

//DeadEnd Popup
import DeadEndMonalisa from './component/popup/DeadEndMonalisa'
import DeadEndCalender from './component/popup/DeadEndCalender'
import DeadEndLaptop from './component/popup/DeadEndLaptop'
import DeadEndBriefcase from './component/popup/DeadEndBriefcase'
import DeadEndMobile from './component/popup/DeadEndMobile';

//Books Popup
import Dictionary from './component/popup/bookPopup/Dictionary';
import Encyclopedia from './component/popup/bookPopup/Encyclopedia';
import Ikigai from './component/popup/bookPopup/Ikigai';
import Investor from './component/popup/bookPopup/Investor';
import Win from './component/popup/Win';


function App() {
  return (
    <Routes>
      <Route path='/'  element={<Instruction/>} />
      <Route path='/escaperoom'  element={<Escape/>} />
      <Route path='/coundown'  element={<CounDown/>} />
      <Route path='/popup/Calender'  element={<Calender/>} />
      <Route path='/popup/Briefcase'  element={<Briefcase/>} />
      <Route path='/popup/Sticky'  element={<Sticky/>} />
      <Route path='/popup/Clock'  element={<Clock/>} />
      <Route path='/popup/DoorLock'  element={<Doorlock/>} />
      <Route path='/popup/Grid'  element={<Grid/>} />
      <Route path='/popup/Laptop'  element={<Laptop/>} />
      <Route path='/popup/Mobile'  element={<Mobile/>} />
      <Route path='/popup/Monalisa'  element={<Monalisa/>} />
      <Route path='/popup/Bookshelf'  element={<Bookshelf/>} />
      <Route path='/popup/Encyclopedia'  element={<Encyclopedia/>} />
      <Route path='/popup/Dictionary'  element={<Dictionary/>} />
      <Route path='/popup/Ikigai'  element={<Ikigai/>} />
      <Route path='/popup/Investor'  element={<Investor/>} />
      <Route path='/popup/dem' element={<DeadEndMonalisa/>} />
      <Route path='/popup/dec' element={<DeadEndCalender/>} />
      <Route path='/popup/del' element={<DeadEndLaptop/>} />
      <Route path='/popup/deb' element={<DeadEndBriefcase/>} />
      <Route path='/popup/demo' element={<DeadEndMobile/>}/>
      <Route path='/popup/mr' element={<MobileRiddle/>}/>
      <Route path='/popup/lr' element={<LaptopRiddle/>}/>
      <Route path='/popup/win' element={<Win/>}/>
    </Routes>
  );
}

export default App;
