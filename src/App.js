import { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Stock from "./pages/Stock"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/stocks/:symbol' element={<Stock/> }/>
        <Route path='/stocks' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
