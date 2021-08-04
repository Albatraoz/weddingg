import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 40px 40px; 
    grid-template-areas: 
    ". . ."
    ". . ."; 

    margin-top: 60px;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows:1fr 1fr; 
        gap: 20px 20px; 
        grid-template-areas: 
        ". ."
        ". ."; 
    }
`

function Noivos () {


    return (
        <div>oi oi </div>
		<div> oi oi oi</div>
    )

}
    
export default Noivos;