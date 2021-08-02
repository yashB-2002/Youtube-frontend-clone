import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import "./Yheader.css";
import { IconButton } from "@material-ui/core";


function Yheader() {

    const [inputSearch, setInputSearch] = useState();
    useEffect(() => {
        document.title = `Youtube`

    })

    return (
        <div className="header">
            <div className="left-side">
                <MenuIcon />
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube_img" />
                </Link>
            </div>
            <div className="middle">
                <input onChange={(event) => setInputSearch(event.target.value)} type="text" placeholder="Search" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="search" />
                </Link>
            </div>
            <div className="right-side">
                <VideoCallIcon className="icons" />
                <AppsIcon className="icons" />
                <NotificationsIcon className="icons" />

                <AccountCircleIcon className="icons" />

            </div>


        </div>
    )
}

export default Yheader
