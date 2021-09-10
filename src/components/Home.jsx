import React from 'react'
import styled from 'styled-components'
import Titulo from './Titulo'
import Image from '../assets/noivos.jpg'
import Imagehome from '../assets/home.jpg'
import svg from '../assets/date.svg'
import Facas from '../assets/facas.png'
import PlaceImage from  '../assets/olugar.jpg'
import Gallery from './Gallery'
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = styled.div`
    background-image: url(${Imagehome});
    background-size: cover;
    height: 85vh;
    position: relative;

    .margin {
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        text-align: left;
        gap: 40px 40px;
        grid-auto-flow: row;
        grid-template-areas:
            ". .";
        height: 100%;
        position: relative;
    }

    h2 {
        font-family: 'Playfair Display', serif;
        font-size: 4.0em;
        color: white;
        margin: 0;
    }

    .date {
        position: absolute;
        width: 40%;
    }

    p {
        color: white;
    }

    .heroText {
        margin-left: 30px;
    }

    @media only screen and (max-width: 600px) {

        background-image: url(${Imagehome});
        background-size: cover;
        background-position: center;
        height: 85vh;
        width: 100%;
        position: relative;

        .margin {
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            align-items: end;
            text-align: left;
            grid-auto-flow: row;
            grid-template-areas:
                ". .";
            height: 100%;
            position: relative;
        }

        h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.0em;
            color: white;
            margin: 0;
        }

        .date {
            position: absolute;
            width: 80%;
            bottom: 55px;
        }

        .heroText {
            margin-left: 30px;
        }

        .divdiv {
            margin-bottom: 50px;
            margin-left: 20px;
        }
    }
`
const Section = styled.div`
    margin: 15vh 0;

    .margin {
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
    }

    .💏 {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        text-align: left;
        gap: 40px 40px;
        grid-auto-flow: row;
        grid-template-areas:
          ". .";
      }

      .grid {
          align-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        text-align: left;
        gap: 40px;
        grid-auto-flow: row;
        grid-template-areas:
          ". . .";
      }

    h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.0em;
        text-align: center;
    }

    .💏 > .img {
        background-image: url(${Image});
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 70vh;
    }

    img{
        width: 100%
    }

    .image-place {
        width: 100%;
        min-height: 400px;
        height: 30vh;
        background: #c0c0c0;
        background-image: url(${PlaceImage});
        background-size: cover;
        background-position: center;
        position: relative;
        margin: 20px 0px;
    }

    .place-name{
        background: white;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 0px 20px;
        text-align: left;
        font-size: 1.5em;
        line-height: 1;
    }

    a {
        padding: 20px;
        border: 1px solid black;
        background: none;
        font-family: 'Playfair Display', serif;
        font-size: 1.2em;
        cursor: pointer;
        transition: all 350ms;
        text-decoration: none;
        color: black;
        text-align: center;
    }

    a:hover{
        background: black;
        color: white;
    }

    @media only screen and (max-width: 600px) {

        .margin {
            margin-left: 5vw;
            margin-right: 5vw;
        }

        .💏 {
            display: block;
          }

        .💏 > .img {
            background-image: url(${Image});
            background-position: center;
            background-size: cover;
            display: block;
            height: 50vh;
        }

        .grid {
            align-items: center;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        align-items: center;
        text-align: left;
        gap: 0px;
        grid-auto-flow: row;
        grid-template-areas: auto;
        grid-template-areas: 
            "."
            "."
            ".";
        }

        .place-name{
            text-align: center;
            position: static;
            background: white;
            padding: 0px 0px;
            text-align: center;
            font-size: 1em;
            line-height: 1;
        }
    }
      

    
`
const Presentes = styled.div`
    
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: .75fr 2.25fr;
    grid-template-rows: 1fr;
    align-items: center;
    text-align: left;
    gap: 40px !important;
    grid-auto-flow: row;
    grid-template-areas:
        ". .";

    .texto {
        margin-bottom: 20px;
    }

    .card {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    img {
        border: 1px solid #c0c0c0;
        width: 100%;
    }

    .details {
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        margin: 5px 0px 20px 0;
    }

    .presente {
        font-size: 1.2em;
        font-weight: 700;
        font-color: #c0c0c0;
        max-width: 50%;
    }
    
    .preco {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-size: 3em;
        margin: 0px;
    }

    .small-text {
        font-size: 16px !important;
    }

    button, a {
        width: 100%;
        padding: 20px;
        border: 1px solid black;
        background: none;
        font-family: 'Playfair Display', serif;
        font-size: 1.2em;
        cursor: pointer;
        transition: all 350ms;
        text-decoration: none;
        color: black;
    }

    button::after {
       content: " ➡"
    }

    button:hover, a:hover{
        background: black;
        color: white;
    }

    @media only screen and (max-width: 600px) {
        margin-left: 5vw;
        margin-right: 5vw;
        display: block;

        .card {
            margin-bottom: 50px
        }
    }
    
`

function Home () {
    return(
        <>
            <Hero id="hero">
                <div className="margin">
                    <div className="divdiv">
                        <h2>Save the date</h2>
                        <div className="heroText">
                            <p>Sejam bem vindos ao nosso site! <br/>Estamos muito felizes em compartilhar esse momento tão especial com vocês! <br/> A presença de cada um é muito importante para nós!</p>
                            {/* <p style={{'margin-left' : '150px', 'padding-bottom' : 'px'}}>Elisa Carvalho <br/></p> */}
                            <button>Confirmar presença</button>
                        </div>
                    </div>
                    <img className="date" src={svg} />
                </div>
            </Hero>
            
            <Section id="noivos">
            <Titulo titulo="Os noivos   "></Titulo>
                <div className="margin" >
                    <h2>Acima de tudo, porém, revistam-se <br/> do amor. que é o elo perfeito. 3:14</h2>
                    <div className="💏">
                        <div className="img">
                            <p></p>
                        </div>
                        <div>
                            <h2>
                                Texto fofinho aleatório quebra de linha
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy 
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset 
                                sheets containing Lorem Ipsum passages, and more recently with 
                                desktop publishing software like Aldus PageMaker including versions 
                                of Lorem Ipsum.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </Section>
            <Section id="presente">
                <Titulo titulo={`Lista de\nPresentes`}></Titulo>
                <Presentes>
                    <div className="card">
                        <img src={Facas} />
                        <div className="details">
                            <p className="presente">Jogo de Facas Tramontina</p>
                            <p className="preco"><i><span className="small-text">R$:</span>150<span className="small-text">,00</span></i></p>
                        </div>
                        <button>Presentear Agora</button>
                    </div>
                    <div>
                        <h2><i>Lorem ipsum sit amet dolor</i></h2>
                        <p className="texto">Um texto</p>
                        <a href="#">Ver lista completa</a>
                    </div>
                </Presentes>
            </Section>
            <Section id="galeria">
                <Titulo titulo={`Galeria de\nfotos`}></Titulo>
                <div className="margin">
                    <Gallery />
                </div>
            </Section>
            <Section id="local">
                <Titulo titulo="Local   "></Titulo>
                <div className="margin">
                    <div className="image-place">
                        <div className="place-name">
                            <h2><i>Reserva Carnijó</i></h2>
                        </div>
                    </div>
                    <div className="grid">
                        <p>Estrada intermunicipal de moreno, km 3, mo11, log - Nossa Sra. da Conceição Moreno - PE, 54800-000</p>
                        <a href="https://goo.gl/maps/z5amNvCLi3BfF611A">Chegar com Maps</a>
                        <a href="https://waze.com/ul/h7nx19xjkj">Chegar com Waze</a>
                    </div>
                </div>
            </Section>
            <Section id="presenca">
                <Titulo titulo="Presença         "></Titulo>
                    <div>
                        <h2><i>Em construção</i></h2>
                    </div>
            </Section>
        </>
    )
}

export default Home;