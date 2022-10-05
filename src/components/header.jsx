import React from "react";
import trollface from '../img/trollface.svg';

export default function Header() {
    return (
        <nav>
            <img src={trollface} className="trollface"/>
            <h1 className="title">Meme Generator</h1>
            <h2 className="course">React Course - Project 5</h2>
        </nav>
    )
}