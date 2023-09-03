import './App.css';
import LandingPage from './components/landing_page/LandingPage';
import HomePage from './components/home_page/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/home" exact element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
