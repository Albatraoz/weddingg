import './Menu.css'
import React from 'react'
import styled from 'styled-components'
import MenuMobile from './MenuMobile';
import {isMobile} from 'react-device-detect';
import { Link, animateScroll as scroll } from "react-scroll";


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
                    <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-70} duration={50}>INÍCIO</Link>
                    <Link activeClass="active" to="noivos" spy={true} smooth={true} offset={-70} duration={50}>OS NOIVOS</Link>
                    <Link activeClass="active" to="presente" spy={true} smooth={true} offset={-70} duration={50}>LISTA DE PRESENTES</Link>
                    <Link activeClass="active" to="galeria" spy={true} smooth={true} offset={-70} duration={50}>GALERIA</Link>
                    <Link activeClass="active" to="local" spy={true} smooth={true} offset={-70} duration={50}>LOCAL</Link>
                    <Link activeClass="active" to="presenca" spy={true} smooth={true} offset={-70} duration={50}>PRESENÇA</Link>
                    {/* <a href="/recado">RECADO</a> */}
                </div>
            </div>
        </Navs>
    )
}



export default Menu