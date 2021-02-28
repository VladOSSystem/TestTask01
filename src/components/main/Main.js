import React from 'react';
import '../../assets/css/main.css';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import RowInfo from './RowInfo';
import Header from './Header';
import Footer from './Footer';
const Main = () => {
    return (
    <>
    <Header/>
      <div className="main-section">
          <div className='main-notification'>
                <div className="fade"></div>
                <div className="latest-notifications">
                    <p style={{color:'grey'}}>Latest notifications:</p>
                    <ContactSupportIcon/>
                </div>
                    <RowInfo 
                        header={"Report"}
                        info={"Kaup24.ee asks latest fixed problems report."}
                        date={'03 January 2021'}
                        isOnline={true}
                        isAction={true}
                    />
                      <RowInfo 
                        header={"Offer request"}
                        info={"Zone Eesti As requesting offer: SQL injection problem."}
                        date={'02 January 2021'}
                        isOnline={true}
                        isAction={true}
                    />
                    <RowInfo 
                        header={"Process update | Elisa Eesti AS"}
                        info={"Last edin made by info@lucreds.com"}
                        date={'01 January 2021'}
                        isProgressBar={true}
                    />
                    <RowInfo 
                        header={"Subscription | Will end soon"}
                        info={"Dear Lucreds, this is friendly to remind you of your VIP Plan subscription, this plan will end in February."}
                        date={'01 January 2021'}
                        isDanger={true}
                    />

          </div>
          <div className="side-notification">
                <div className="status">
                <div className="fade"></div>
                <div className="status-info">

                    <p>Status</p>
                    <div className="scoreStatus">
                        <p style={{color:"grey"}}>Your Score</p>
                        <p style={{fontWeight: '500', fontSize: '30px'}}>450</p>
                        <hr/>
                        <p style={{color:"grey", fontSize: '15px'}}>Profile views thes week:</p>
                        <p style={{color:"red", marginTop: '15px', fontSize: '30px', fontWeight: '500'}}>53</p>
                    </div>
                </div>
                </div>
                <div className="earnings">
                    <div className="fade"></div>
                        <p style={{width: '80%', margin: '0 auto'}}>Earnings</p>
                    <div className="earnings-info">
                        <p style={{color: 'grey'}}>Total:</p>
                        <p style={{color: 'green', fontSize: '30px', fontWeight: 500}}>4291.65€</p>
                        <hr/>
                        <p style={{color: 'grey', fontSize: '15px'}}>Your earnings on January</p>
                        <p style={{color: 'green', fontSize: '30px', fontWeight: 500}}>8497.65€</p>

                    </div>
                </div>
          </div>
      </div>
        <Footer/>
    </>
    )
};

export default Main;
