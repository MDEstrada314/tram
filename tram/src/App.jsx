import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import MainApp from "./components/MainApp";
import "./App.css";


function App() {
  const [showMain, setShowMain] = useState(true);
  return (
    
    <div className="app-container">
      {showMain ? <MainScreen onContinue={() => setShowMain(false)} /> : <MainApp />}
    </div>
  );
}

export default App;

