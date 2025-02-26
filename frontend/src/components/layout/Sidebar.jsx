import "./css/Sidebar.css";
import homeIcon from "../../assets/icons/home.svg";
import musicIcon from "../../assets/icons/canciones.svg";
import editMusic from "../../assets/icons/edit-canciones.svg";
import BibleIcon from "../../assets/icons/biblia.svg";
import formaIcon from "../../assets/icons/rayar.svg";
import TemaIcon from "../../assets/icons/temas.svg";
import compares from "../../assets/icons/fi-rs-flip-horizontal.svg";
import settingsIcon from "../../assets/icons/fi-rs-chart-network.svg";


const menuItems = [
  { name: "Inicio", icon: homeIcon, view: "Workspace" },
  { name: "Canciones", icon: musicIcon, view: "songs" },
  { name: "Editar", icon: editMusic, view: "edit-songs" },
  { name: "Biblia", icon: BibleIcon, view: "bible" },
  { name: "Rayar", icon: formaIcon, view: "highlight" },
  { name: "Temas", icon: TemaIcon, view: "themes" },
  { name: "Comparar", icon: compares, view: "compare" },
  { name: "Configuración", icon: settingsIcon, view: "settings" },
  
];


function Sidebar({ setActiveView }) {
  return (
    <div className="Sidebar">
      <div className="menu">
        {menuItems.map((item, index) => (
          <button key={index} className="menu-button" onClick={() => setActiveView(item.view)}>
            <img src={item.icon} alt={item.name} />
          </button>
        ))}
      </div>
      <div className="canciones">Canciones</div>
      <div className="espacios">Espacio</div>
    </div>
  );
}

export default Sidebar;
