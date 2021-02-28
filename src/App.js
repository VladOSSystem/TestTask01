import React from 'react';
import './App.css';
import './assets/css/main.css';

import { connect } from 'react-redux';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DropdownHeader from './components/DropdownHeader';
import Index from './components/main/index';
import './assets/css/main.css';

const App = ({layout}) => {
  return (
   <div className="main-layout">
     {layout.layoutStyle === 'left' ? (
       <>
         <Sidebar/>
        <div className="header-merge">
          <Header/>
          <DropdownHeader/>
          <Index/>
        </div>
       </>
     ) : (
      <>
          <div className="header-merge">
            <Header/>
            <DropdownHeader/>
            <Index/>
          </div>
           <Sidebar/>
      </>
     )}
   
   </div>
  );
}

const mapStateToProps = state => {
  return {
    layout: state.Layout
  }
}
export default connect(mapStateToProps, null)(App);
