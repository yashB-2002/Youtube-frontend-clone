import React from 'react'
import "./ChannelDesc.css"
function ChannelDesc({ image, title, views, time, channelName }) {
    return (
        <div className="channelDesc">
            <img className="img-sonny" src={image} alt="hulu" />
            <div className="text">
                <h3 className="text_title">{title}</h3>
                <p className="text_p">{channelName}.&nbsp;&nbsp;  {views}. &nbsp;&nbsp;  {time}</p>
            </div>

        </div>
    )
}

export default ChannelDesc

