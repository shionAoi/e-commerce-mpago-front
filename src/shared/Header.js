import React from 'react'
import logo from '../assets/music-audio-alp-201709.jpg'

export const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/*<div className="pd-billboard-background">*/}
                <img src={logo}
                     width="1900"
                     height="320"/>
                {/*</div>*/}
            </div>
        </nav>
    )
}
