import React from 'react'
import "./SearchedChannel.css"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

function SearchedChannel({ image, name, subs, videosCount, desc }) {
    return (
        <div className="SearchedChannel">
            <div className="logo">
                <img className="name" src={image} alt="channel" />

            </div>
            <div className="info">
                <h3 className="H">{name}</h3>
                <p className="P">{subs} . {videosCount} </p>
                <p>{desc}</p>
            </div>
            <div className="footer">
                <button className="btn btn-danger">Subscribe</button>
                <NotificationsNoneIcon />


            </div>

        </div>

    )
}

export default SearchedChannel
