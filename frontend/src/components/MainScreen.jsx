import { useState, useEffect } from "react";

function MainScreen({ onContinue }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula el tiempo de carga

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-screen">
      <h1>Bienvenido a Tram</h1>
      {loading ? <p>Cargando...</p> : <button onClick={onContinue}>Entrar</button>}
    </div>
  );
}

export default MainScreen;
