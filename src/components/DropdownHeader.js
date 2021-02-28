import React from 'react';
import '../assets/css/main.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { connect } from 'react-redux';
import { changeLayout, dropDownArrow } from '../store/layout/action'
const DropdownHeader = ({changeLayout, dropDownArrow, layout}) => {
 
    const changeLayoutStyle = () => {
            if (layout.layoutStyle === 'left') {
                changeLayout('right');
            } else if (layout.layoutStyle === 'right') {
                changeLayout('left');
            }
            
        }
    const changeHeader = () => {
        dropDownArrow(!layout.hideDownArrow)
    }
    return (
        <div className={`${layout.hideDownArrow ? 'inner-header-hide' : 'inner-header'}`} >
        <div className="header-arrow" onClick={changeHeader}>
                <KeyboardArrowDownIcon/>
            </div>
            <div className={`${layout.hideDownArrow ? 'header-info-hide' : 'header-info'}`} >
                <p>NEW REQUEST</p>
                <p><b>5</b></p>
            </div>
            <div className={`${layout.hideDownArrow ? 'header-info-hide' : 'header-info'}`} >
                <p>PROCESSING</p>
                <p><b>4</b>/8</p>
            </div>
            <div className={`${layout.hideDownArrow ? 'header-info-hide' : 'header-info'}`} >
                <p>RATING</p>
                <p><b>4.9</b></p>
            </div>
            <div className={`${layout.hideDownArrow ? 'header-info-hide' : 'header-info'}`} >
                <p>PLAN</p>
                <p><b>Premium</b></p>
            </div>
            <div className={`${layout.hideDownArrow ? 'header-info-hide' : 'layout-switcher'}`} >
                <p style={{color:'grey', fontSize: '12px'}}>SWITCH (BASIC)</p>
                <label className="switch">
                    <input 
                        type="checkbox" 
                        onClick={changeLayoutStyle} 
                        defaultChecked={layout.layoutStyle === 'left' ? true : false }
                        />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
};
const mapStatetoProps = state => {
    return {
        layout: state.Layout
    };
  };
  
export default connect(mapStatetoProps, {changeLayout, dropDownArrow})(DropdownHeader);