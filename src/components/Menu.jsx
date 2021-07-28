import './Menu.css'
import React from 'react'
import styled from 'styled-components'
import MenuMobile from './MenuMobile';
import {isMobile} from 'react-device-detect';


const Navs = styled.div`

    background: black;
    border-bottom: 1px;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 10;

    .margin {
        height: 100;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        margin: 10px;
        color: white;
        text-decoration: none;
        transition: all 350ms
    }

    a:hover {
        color: #c0c0c0
    }

    .navMenu {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .logoDiv {
        margin-right: 40px;
        height: 100%;
        padding-right: 40px;
        border-right: 1px solid white;
        width: 30%;
    }

    p {
        font-family: 'Playfair Display', serif;
        font-size: 1.5em;
        color: white;
        font-weight: 600;
    }

`;


function Menu () {
    if (isMobile) {

        return (
            <MenuMobile />
        )
    }
    return (
        <Navs id="menu">
            <div className="margin">
                <div className="logoDiv">
                    <p>Lisa &amp; Italo</p>
                </div>
                <div className="navMenu">
                    <a href="#">HOME</a>
                    <a href="#">OS NOIVOS</a>
                    <a href="#">LISTA DE PRESENTES</a>
                    <a href="#">LOCAL</a>
                    <a href="#">PRESENÇA</a>
                    <a href="#">RECADO</a>
                </div>
            </div>
        </Navs>
    )
}



export default Menu