import { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Workspace from "./layout/Workspace";
import PreviewPanel from "./layout/PreviewPanel";
import Header from "../components/Header";

import EditSongs from "./layout/EditSongs";


function App() {
  const [activeView, setActiveView] = useState("Workspace");
  return (
    <div className="app-container">
    <Header/>
        <div className="main-layout">
          <div className="sidebar" >
          <Sidebar setActiveView={setActiveView} />
          </div >
          <div className="workspace">
            {activeView ==="Workspace" && <Workspace />}
            {activeView ==="edit-songs" && <EditSongs />}
          
          </div>
          <div className="preview" >
            <PreviewPanel />
          </div>
        </div>
    </div>
   
  );
}

export default App;
