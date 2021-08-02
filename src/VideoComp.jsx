import React from 'react'
import "./VideoComp.css"

function VideoComp({ image1, image2, title, channel, views, time }) {
    return (

        <div className="VideoComp">


            <a ><img className="imgg" src={image1} alt="image" /></a>

            <div className="info_first">
                <img className="imggg" src={image2} alt="" />
                <h4 className="title-video">{title}</h4>
            </div>
            <div className="info">
                <p>{channel}</p>
                <p>{views} views ,{time} </p>
            </div>
        </div>



    )
}

export default VideoComp;
