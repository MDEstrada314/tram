import { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Workspace from "./layout/Workspace";
import PreviewPanel from "./layout/PreviewPanel";
import Header from "../components/Header";


function App() {
  const [showMain, setShowMain] = useState(true);

  return (
    <div className="app-container">
    <Header/>
        <div className="main-layout">
          <div className="sidebar" >
            <Sidebar />
          </div >
          <div className="workspace">
          <Workspace />
          </div>
          <div className="preview" >
            <PreviewPanel />
          </div>
        </div>
    </div>
   
  );
}

export default App;
