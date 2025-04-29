import CartWidget from "./CartWidget";

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#ffe4e1" }}>
    <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" alt="Logo Tienda" style={{ height: '40px' }} /> {/* Cambia por tu logo */}
        </a>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
            </li>
        </ul>
        <CartWidget />
        </div>
    </div>
    </nav>
);
};

export default NavBar;
