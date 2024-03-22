import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from 'react-router-dom';

import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
    let [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div class="logo-container">
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "🔵" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/restaurants">Cart</Link></li>
                    <button className="login" onClick={() => {
                        btnName != "Login" ? setBtnName("Login") : setBtnName("Logout");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;