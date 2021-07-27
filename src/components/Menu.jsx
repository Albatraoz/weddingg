import './Menu.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react'
import styled from 'styled-components'
import Rings from '../assets/rings.svg'


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

    @media only screen and (max-width: 600px) {
        
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
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            cursor: pointer;
            transition: all .5s ease-in-out;
            border: 3px solid #fff;
        }

        .menu-btn__burger {
            width: 50px;
            height: 6px;
            background: #ffff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(255,101,47,.2);
            transition: all .5s ease-in-out;
        }

        .menu-btn__burger::before,
        .menu-btn__burger::after {
            content: '';
            position: absolute;
            width: 50px;
            height: 6px;
            background: #ffff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(255,101,47,.2);
            transition: all .5s ease-in-out;
        }
        .menu-btn__burger::before {
            transform: translateY(-16px);
        }

        .menu-btn__burger::after {
            transform: translateY(16px);
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

    }
`;

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

function activateLasers() {
    this.inputRef = React.createRef();

    if(!menuOpen) {
        menuBtn.className.add('open');
        menuOpen = true;
      } else {
        menuBtn.className.remove('open');
        menuOpen = false;
      }
  }

function handleClick () {
    this.inputRef.current.querySelector('.menu-btn');
};

const Menu = props => (
    
    <Navs id="menu">
        <div className="margin">
            <div class="menu-btn">
                <div class="menu-btn__burger" ref={this.inputRef}></div>
            </div>
            <div className="logoDiv">
                <p>Lisa & Italo</p>
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

export default Menu