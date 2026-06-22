import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar
        onPerfilClick={() => console.log("Perfil")}
        onCarritoClick={() => console.log("Carrito")}
        onCatalogoClick={() => console.log("Catálogo")}
        onContactosClick={() => console.log("Contactos")}
      />

      <main>
        <h1>Bienvenido a la tienda</h1>
      </main>
    </>
  );
}

export default App;