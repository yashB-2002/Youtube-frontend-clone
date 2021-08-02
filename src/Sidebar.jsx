import React from 'react';
import "./Sidebar.css";
import SidebarCol from "./SidebarCol";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarCol Icon={HomeIcon} title="Home" />
            <SidebarCol Icon={SubscriptionsRoundedIcon} title="Subscripstion" />
            <SidebarCol Icon={ExploreRoundedIcon} title="Explore" />
            <hr />
            <SidebarCol Icon={LibraryAddIcon} title="Library" />
            <SidebarCol Icon={HistoryIcon} title="History" />

            <SidebarCol Icon={WatchLaterIcon} title="Watch later" />
            <SidebarCol Icon={ThumbUpAltIcon} title="Liked videos" />
            <hr />
            <h2 className="H3">More from Youtube</h2>
            <SidebarCol Icon={YouTubeIcon} title="Youtube Premium" />
            <SidebarCol Icon={LocalMoviesIcon} title="Movies" />
            <SidebarCol Icon={SportsEsportsIcon} title="Gaming" />
            <SidebarCol Icon={LiveTvIcon} title="Live" />


        </div>
    )
}

export default Sidebar;
