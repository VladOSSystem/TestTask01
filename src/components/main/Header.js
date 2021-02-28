import React, {useEffect, useState} from 'react';
import '../../assets/css/main.css';

const Header = () => {
    const [online, setOnline] = useState(false)
    const onlineClick = () => {
        setOnline(!online)
    }
    return (
        <div className="header-main-section">
                {online ? (
                    <div className="main-wrapper">

                        <div className="online-btn" onClick={onlineClick}>
                        Status: <p style={{color: 'green'}}>Online</p>
                        </div>
                        <div className="last-scan" style={{color: 'grey'}}>
                            Last scan 25. Oct 2020
                        </div>
                    </div>
                ) : (
                    <div className="main-wrapper">

                        <div className="online-btn" onClick={onlineClick}>
                            Status:<p style={{color: 'red'}}>Ofline</p>
                        </div>
                        <div className="last-scan" style={{color: 'grey'}}>
                                Last scan 25. Oct 2020
                        </div>
                    </div>

                )}
        </div>
    )
};
export default Header;
