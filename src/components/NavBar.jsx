import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header style={{
      backgroundColor: "#fce6fc",
      padding: "1rem 10rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "130px",
      overflow: "visible" 
    }}>

      {/* CATEGORIAS */}

      <nav style={{
        display: "flex",
        gap: "2rem",
        fontWeight: "bold",
        fontSize: "1.4rem"
      }}>
        <Link to="/category/labios" style={{ color: "#AA73B6", textDecoration: "none" }}>Labios</Link>
        <Link to="/category/ojos" style={{ color: "#AA73B6", textDecoration: "none" }}>Ojos</Link>
        <Link to="/category/rostro" style={{ color: "#AA73B6", textDecoration: "none" }}>Rostro</Link>
      </nav>

      {/* LOGO */}

      <div style={{ transform: "scale(1.4)", transformOrigin: "center" }}>
        <Link to="/">
          <img
            src="/assets/logo-doll.png"
            alt="Doll Makeup"
            style={{
              height: "150px",
              objectFit: "center"
            }}
          />
        </Link>
      </div>

      {/* CARRITO */}

      <div>
        <Link to="/cart" style={{ textDecoration: "none", color: "#a65fc2" }}>
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
