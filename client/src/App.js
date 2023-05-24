import CreateDog from "./views/CreateDog/CreateDog"
import Detail from "./views/Detail/Detail"
import Home from "./views/Home/Home"
import  Landing  from "./views/Landing/Landing"
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";



function App() {
  
  const location = useLocation();
  
  return (
    <div className="App">

          {
            (location.pathname !== "/" && location.pathname !== "/detail/:id") && <Navbar />
          } 

      <Routes>
            <Route  path="/" element={<Landing />} />

            <Route path="/home" element={<Home />} />

            <Route  path="/detail/:id" element={<Detail />} />

            <Route  path="/create" element={<CreateDog />} />
      </Routes>
    </div>
  );
}

export default App;
