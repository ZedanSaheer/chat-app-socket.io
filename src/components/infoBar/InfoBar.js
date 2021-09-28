import React from 'react'
import "./infoBar.css"

const infoBar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftContainer">
                <img src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png" alt="online" className="onlineIcon" />
                <h3>{room}</h3>
            </div>
            <div className="rightContainer">
                <a href="/"><img src="https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png" alt="close" /></a>
            </div>
        </div>
    )
}

export default infoBar
