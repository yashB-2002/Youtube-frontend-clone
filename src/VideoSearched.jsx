import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import "./VideoSearched.css";
import SearchedChannel from "./SearchedChannel";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ChannelDesc from "./ChannelDesc";


function VideoSearched() {
    return (
        <div className="VideoSearched">
            <div className="filterIcon">
                <TuneIcon />
                <h3>Filter</h3>


            </div>
            <hr />
            <SearchedChannel
                image="https://cdn-images-1.medium.com/max/1200/1*8iC6vXqgRDBlQnlsdDEewA.png"
                name="Sonny Sangha"
                subs="62.5K Subscribers"
                videosCount="41 videos"
                desc="You can find Awseome videos here which will help you doing thing that i do or better than this 🤟"



            />
            <hr />
            <ChannelDesc
                image="https://i.ytimg.com/vi/MqDlsjc8GLo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA-L9cQWGHb6JfVYRrFCiIwHc0oSw"
                title="🔴 Let's build hulu app with next.js "
                views="37K views"
                time="3 weeks ago"
                channelName="Sonny Sangha"

            />
            <ChannelDesc
                image="https://i.ytimg.com/vi/QiTq5WrWoJw/maxresdefault.jpg"
                title="🔴 Let's build Slack app with next.js "
                views="69K views"
                time="2 months ago"
                channelName="Sonny Sangha"

            />
            <ChannelDesc
                image="https://i.ytimg.com/vi/MJzmZ9qmdaE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLApl2TRC7ET2qmIY9_foyWsb1W3gQ"
                title="🔴 Let's build Signal app with next.js "
                views="106K views"
                time="3 months ago"
                channelName="Sonny Sangha"

            />

        </div>

    )
}

export default VideoSearched;
