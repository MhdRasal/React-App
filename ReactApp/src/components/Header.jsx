import React from "react";

function Header(){
    return (
        <header style={{display: "flex"}}>
            <h1 className="siteName">MyShop</h1>
            <nav style={{marginLeft: "auto"}}>
                <ul className="nav-links">
                    <li className="nav-link">Home</li>
                    <li className="nav-link">Products</li>
                    <li className="nav-link">Cart</li>
                </ul>
            </nav>
        </header>
    )
}   
export default Header;
