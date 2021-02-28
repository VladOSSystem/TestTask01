import React from 'react';
import { connect } from 'react-redux';
import { showSidebar } from '../store/layout/action';
//style
import '../assets/css/main.css';
//icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home'; 
import EmailIcon from '@material-ui/icons/Email';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = ({showSidebar, layout }) => {
    const toggleSidebar = () => {
            showSidebar(!layout.showSidebar)
    }

    return (
        <div className={`${layout.showSidebar ? "sidebar-full" : "sidebar"}`}>
            <div className="sidebar-menu">
                <MenuIcon onClick={toggleSidebar} style={{fontSize: 30, color: '#87ceeb'}}/>
            </div>
            <div className="borderMenu"></div>
            <div className="main-icons">
                {layout.showSidebar ? (
                    <>
                     <div className="icon-expanded">
                        <HomeIcon style={{fontSize: 30, color: '#87ceeb'}}/>
                        <p>Home</p>
                    </div>
                    <div className="icon-expanded">
                        <EmailIcon style={{fontSize: 30, color: '#white'}}/>
                        <p>Email</p>
                    </div>
                    <div className="icon-expanded">
                        <SettingsInputAntennaIcon style={{fontSize: 30, color: '#white'}}/>
                        <p>Share</p>
                    </div>
                    <div className="icon-expanded">
                        <EqualizerIcon style={{fontSize: 30, color: '#white'}}/>
                        <p>Graphs</p>
                    </div>
                    </>
                ) : (
                    <>
                        <HomeIcon style={{fontSize: 30, color: '#87ceeb'}}/>
                        <EmailIcon style={{fontSize: 30, color: 'white'}}/>
                        <FindInPageIcon style={{fontSize: 30, color: 'white'}}/>
                        <SettingsInputAntennaIcon style={{fontSize: 30, color: 'white'}}/>
                        <EqualizerIcon style={{fontSize: 30, color: 'white'}}/>
                    </>
                )}
               
   
                
            </div>
            <div className="settings-icon">
            {layout.showSidebar ? (
                <div className="icon-expanded">
                        <SettingsIcon style={{fontSize: 30, color: 'white'}}/>
                        <p>Settings</p>
                    </div>
            ) : (
                <SettingsIcon style={{fontSize: 30, color: 'white'}}/>

            ) }
            </div>
        </div>
    )
};
const mapStatetoProps = state => {
    return {
        layout: state.Layout
    };
  };
  
export default connect(mapStatetoProps, {showSidebar})(Sidebar);

