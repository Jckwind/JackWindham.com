import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import '@/components/css/menu_button.css'

type MenuButtonProps = {
    toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ toggleMenu }) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        toggleMenu();
        setIsActive(!isActive);
    };

    return (
        <button className={`md:hidden btn btn-circle btn-ghost ${isActive ? "active" : ""}`}
            id="menu-toggle"
            onClick={handleClick}>
            <FontAwesomeIcon icon={isActive ? faBarsStaggered : faBars}></FontAwesomeIcon>
        </button>
    )
}

export default MenuButton