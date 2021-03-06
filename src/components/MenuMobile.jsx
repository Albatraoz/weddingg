import React, {useState} from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";


const MobileNavs = styled.div`
    
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

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #272727;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .menu-btn {
        margin: 5px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }

    .menu-btn__burger {
        width: 30px;
        height: 2px;
        background: #ffff;
        border-radius: 0px;
        box-shadow: 0 2px 5px rgba(255,101,47,.2);
        transition: all .5s ease-in-out;
    }

    .menu-btn__burger::before,
    .menu-btn__burger::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        background: #ffff;
        border-radius: 0px;
        box-shadow: 0 2px 5px rgba(255,101,47,.2);
        transition: all .5s ease-in-out;
    }

    .menu-btn__burger::before {
        transform: translateY(-8px);
    }

    .menu-btn__burger::after {
        transform: translateY(8px);

    }

    .menu-btn.open .menu-btn__burger {
        transform: translateX(-50px);
        background: transparent;
        box-shadow: none;
    }

    .menu-btn.open .menu-btn__burger::before {
        transform: rotate(45deg) translate(35px, -35px);
    }

    .menu-btn.open .menu-btn__burger::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }

    .navMenu {
        display: none;
    }

    .logoDiv {
        display: none;
    }

    .navMenuMob {
        display: flex;
        flex-direction: column;
        z-index: 1;
        position: absolute;
        width: 100%;
        background: black;
        border: 1px solid black;
    }

    .navMenuMob.open {
        display: none;
        transition: transform 0.3s ease-in-out;
    }

    .navMenuMob:hover {
        display: flex;
        flex-direction: column;
        z-index: 1;
        position: absolute;
        width: 100%;
        border: 1px solid black;
    }
    
`;

function MenuMobile () {

    const [isMenuShowing, setIsMenuShowing] = useState(false)
    const [isDropDown, setDropDown] = useState(false)

    function hambClick(){
        setIsMenuShowing(prevState => !prevState)
        setDropDown(prevState => !prevState)
    }

    return (

    <MobileNavs id="menu">
        <div className="margin">
            <div className={`menu-btn ${isMenuShowing ? 'open'  : ''}`} onClick={hambClick}>
                <div className="menu-btn__burger">
                </div>
            </div>
        </div>
        <div className={`navMenuMob ${isDropDown ? ''  : 'open' } `} >
            <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-70} duration={50}>IN??CIO</Link>
            <Link activeClass="active" to="noivos" spy={true} smooth={true} offset={-70} duration={50}>OS NOIVOS</Link>
            <Link activeClass="active" to="presente" spy={true} smooth={true} offset={-70} duration={50}>LISTA DE PRESENTES</Link>
            <Link activeClass="active" to="galeria" spy={true} smooth={true} offset={-70} duration={50}>GALERIA</Link>
            <Link activeClass="active" to="local" spy={true} smooth={true} offset={-70} duration={50}>LOCAL</Link>
            <Link activeClass="active" to="presenca" spy={true} smooth={true} offset={-70} duration={50}>PRESEN??A</Link>
        </div>
    </MobileNavs>
    );

}

export default MenuMobile