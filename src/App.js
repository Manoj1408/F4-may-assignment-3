import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Header />
      <hr style={{ width: "100%", display: "flex",height:"2px",backgroundColor:"white" }} />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
