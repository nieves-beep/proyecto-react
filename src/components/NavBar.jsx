import CartWidget from "./CartWidget";
import logo from '../assets/logo-doll.png';
import { space } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";


function NavBar() {
return (
    <nav style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#FAE3FF"}}>
      <img src={logo} alt="Logo de Doll Makeup Store" style={{ height: "100px" }} />

      <ul style={{display: "flex", listStyle: "none", gap: "20px"}}>
        <li><CiMenuBurger size={24}/></li>
        <li><IoSearchOutline size={24}/></li>
        <li><GoPerson size={24}/></li>
        <li><CiShoppingCart size={24} /></li>
      </ul>
    </nav>
);
}

export default NavBar;
