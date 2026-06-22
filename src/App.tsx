import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar
        onCatalogClick={() => console.log("Catálogo")}
        onContactsClick={() => console.log("Contactos")}
        onCartClick={() => console.log("Carrito")}
        onProfileClick={() => console.log("Perfil")}
      />
    </>
  );
}

export default App;