import { useState } from "react";
import Navbar from "./components/Navbar";
import ProfileModal from "./components/ProfileModal";

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <Navbar
        onPerfilClick={() => setIsProfileOpen(true)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        nombre="Juan Pérez"
        email="juan@email.com"
        telefono="+591 77777777"
        direccion="Sucre, Bolivia"
      />

      <main style={{ padding: "2rem" }}>
        <h1>Bienvenido</h1>
      </main>
    </>
  );
}

export default App;