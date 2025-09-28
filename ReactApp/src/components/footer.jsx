import React from "react";


function Footer(){
    return (
        <div className="footer">
            <div style={{display: "flex"}}>
                <ul className="footer-link">
                    <li className="foot-link">Home</li>
                    <li className="foot-link">About </li>
                    <li className="foot-link">Contact</li>
                </ul>
            </div>
            <p className="copyright">%copy Rasal 2025</p>
        </div>
    )
}

export default Footer;