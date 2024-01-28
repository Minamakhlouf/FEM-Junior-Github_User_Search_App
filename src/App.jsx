import {useState, useEffect} from "react"; 
import { useMediaQuery } from "@react-hook/media-query";
import './App.css'
import Heading from "./components/Heading"; 
import Search from "./components/Search"; 
import Output from "./components/Output"; 

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode] = useState("light"); 
  const [userData, setUserData] = useState(); 

  const userSearchHandler = (userInfo) => {
    setUserData(userInfo); 
  }

  useEffect(() => {
    if (prefersDarkMode) {
      setColorMode("dark"); 
    }
  }, [])

  const colorModeChangeHandler = (currentColor) => {
    if (currentColor === "dark") {
      setColorMode("light"); 
    } else {
      setColorMode("dark"); 
    }
  }

  return (
    <div id={colorMode} className="app">
      <Heading currentColor={colorMode} onColorChange={colorModeChangeHandler}/>
      <Search userSearchHandler={userSearchHandler}/>
      <Output userData={userData}/>
    </div>
  )
}

export default App
