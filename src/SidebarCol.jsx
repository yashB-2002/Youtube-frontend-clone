import React from 'react'

import "./SidebarCol.css"

function SidebarCol({ Icon, title }) {
    return (
        <div className="SidebarCol "  >
            <Icon className="icon" />
            <h2 className="title">{title}</h2>



        </div>
    )
}

export default SidebarCol;
