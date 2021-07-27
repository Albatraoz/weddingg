import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Playfair Display', serif;
        font-size: 4.0em;
        font-weight: 700;
        margin: 0
    }

    div {
        background: black;
        height: 1px;
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        margin-left: 5vw;
        margin-right: 5vw;

        p {
            font-size: 2em;
        }
    }
`

function Titulo (props) {
    return(
        <Title>
            <p>{props.titulo}</p>
            <div />
        </Title>
    )
}

export default Titulo;