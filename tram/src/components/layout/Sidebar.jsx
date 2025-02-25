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
  { name: "Inicio", icon: homeIcon },
  { name: "Canciones", icon: musicIcon },
  { name: "Editar", icon: editMusic },
  { name: "Biblia", icon: BibleIcon },
  { name: "Rayar", icon: formaIcon },
  { name: "Temas", icon: TemaIcon },
  { name: "Comparar", icon: compares },
  { name: "Configuración", icon: settingsIcon },
  
];


function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="menu">
        {menuItems.map((item, index) => (
          <button key={index} className="menu-button">
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
