import React from "react";
import Sidebar from "./Sidebar";
import Yheader from "./Yheader";
import Video from './Video'
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VideoSearched from "./VideoSearched";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {


    return (
        <div className="app_top">
            <BrowserRouter>
                <Yheader />

                <Switch>
                    <Route path="/search/:searchItem">
                        <div className="app-middle" >
                            <Sidebar />
                            <VideoSearched />
                        </div>
                    </Route>

                    <Route>
                        <div className="app-middle" >
                            <Sidebar />
                            <Video />
                        </div>


                    </Route>



                </Switch>
            </BrowserRouter>

        </div>

    )


}

export default App;