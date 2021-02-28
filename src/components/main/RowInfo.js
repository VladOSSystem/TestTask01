import React from 'react'
import '../../assets/css/main.css';

const RowInfo = (props) => {
    return (
        <>
        <div className={`${props.isDanger ? 'row-object-danger' : 'row-object'}`}>
          {props.isDanger ? (
                <div className="fade-danger"></div>
          ) : null}
            <div className="info-block">
            {props.isOnline ? (
                <div className="feed">
                    <div className="online">
                        <div className="online-circle"> </div>
                    </div>
                    <div className="feed-info">
                        <h3>{props.header}</h3>
                        <p>{props.info}</p>
                    </div>
                </div>
            ) : (
                <>
                    <h3>{props.header}</h3>
                    <p>{props.info}</p>
                </>
            )}
            </div>
            {props.isAction ? (
                <div className="action-date">
                    <div className="action">
                        <div className="action-btn">
                            Action
                        </div>
                    </div>
                    <div className="date" style={{color:'grey'}}>{props.date}</div>
                </div>
                ) : (
                    <>
                        {props.isProgressBar ? null : (

                            <div className="date" style={{color:'grey'}}>{props.date}</div>
                        ) }
                    </>
                )}
            {props.isProgressBar ? (
                <div className="progressBar">
                    <div className="progress-bar">
                        <progress max="100" value="70" ></progress>
                    </div>
                    <div className="date" style={{color:'grey'}}>{props.date}</div>
                </div>
            ) : null}
            </div>
            <hr style={{width: '95%', margin: '0 auto'}}/>
            </>
    )
}
export default RowInfo;
