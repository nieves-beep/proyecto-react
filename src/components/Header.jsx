import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import './Header.css';

function Header() {
    return (
        <div className="container">
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a Doll Makeup Store!" />
        </div>
    );
}

export default Header;
