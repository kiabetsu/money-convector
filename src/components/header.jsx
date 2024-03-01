import React from "react";

function Header() {
    return(
        <div className="header">
            <a className="logo" href="">MoneyCon</a>
            <div className="nav-header">
                <a className="header-menu-item" href="">Курс валют</a>
                <a className="header-menu-item" href="">Обмен</a>
                <a className="header-menu-item" href="">Профиль</a>
            </div>
        </div>
    );
}

export default Header;