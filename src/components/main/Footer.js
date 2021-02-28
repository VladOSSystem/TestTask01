import React from 'react'
import '../../assets/css/main.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                &copy;{new Date().getFullYear() } | All Rights Reserved
            </div>
        </div>
    )
}
export default Footer;