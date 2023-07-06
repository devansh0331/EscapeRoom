import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import Escape from "../component/Escape room/Escape";
import App from "../App";

const useAuth = createContext()



export default function Count() {
    const [count, setCount] = useState('Changed Value');

    // function incrCount() {
    //     setCount(count + 1)
        
    // }

    // const value = {count , incrCount}




  
    return (
      <useAuth.Provider value={count}>
            <App/>
      </useAuth.Provider>
    );
  }

  export {useAuth}