import React, { useState } from 'react';
import '../assets/css/main.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {
    const [searchInput, setSearchInput] = useState(false)
    const searchQuery = () => {
        setSearchInput(!searchInput)
    }
    return (
        <div className="header">
            <h2>LOGO HERE</h2>
            <div className="header-icons">
                <div className="header-icons-inner" onClick={searchQuery}>
                    <SearchIcon style={{fontSize: 30, color: '#87ceeb'}}/>
                </div>
                {searchInput ? (
                 <input 
                    style={{
                        position: 'absolute',
                        top: '30px',
                        right: '350px'
                        }}/>
                ) : (<></>)}
              
                <div className="header-icons-inner">
                    <NotificationsIcon style={{fontSize: 30, color: '#87ceeb'}}/>
                </div>
                <div className="header-icons-inner">
                    <PersonIcon style={{fontSize: 30, color: '#87ceeb'}}/>
                </div>
            </div>
        </div>
    )
};

export default Header;