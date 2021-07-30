import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
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

const MyGallery = () => (
    
  <Gallery>
      <Grid>
        <Item
        original="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0017.jpg"
        thumbnail="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0017.jpg"
        width="1024"
        height="768"
        >
        {({ ref, open }) => (
            <img ref={ref} onClick={open} src="https://ifgama.s3.us-east-2.amazonaws.com/thumb/thumb0017.jpeg" />
        )}
        </Item>
        <Item
        original="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0038.jpg"
        thumbnail="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0038.jpg"
        width="1024"
        height="768"
        >
        {({ ref, open }) => (
            <img ref={ref} onClick={open} src="https://ifgama.s3.us-east-2.amazonaws.com/thumb/thumb0038.jpeg" />
        )}
        </Item>
        <Item
        original="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0056.jpg"
        thumbnail="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0056.jpg"
        width="1024"
        height="768"
        >
        {({ ref, open }) => (
            <img ref={ref} onClick={open} src="https://ifgama.s3.us-east-2.amazonaws.com/thumb/thumb0056.jpeg" />
        )}
        </Item>
        <Item
        original="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0060.jpg"
        thumbnail="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0060.jpg"
        width="1180"
        height="1920"
        >
        {({ ref, open }) => (
            <img ref={ref} onClick={open} src="https://ifgama.s3.us-east-2.amazonaws.com/thumb/thumb0060.jpeg" />
        )}
        </Item>
        <Item
        original="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0079.jpg"
        thumbnail="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0079.jpg"
        width="1180"
        height="1920"
        >
        {({ ref, open }) => (
            <img ref={ref} onClick={open} src="https://ifgama.s3.us-east-2.amazonaws.com/thumb/thumb0079.jpeg" />
        )}
        </Item>
        <Item
        original="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0085.jpg"
        thumbnail="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0085.jpg"
        width="1180"
        height="1920"
        >
        {({ ref, open }) => (
            <img ref={ref} onClick={open} src="https://ifgama.s3.us-east-2.amazonaws.com/thumb/thumb0085.jpeg"/>
        )}
        </Item>
        <Item
        original="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0082.jpg"
        thumbnail="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0082.jpg"
        width="1180"
        height="1920"
        >
        {({ ref, open }) => (
            <img ref={ref} onClick={open} src="https://ifgama.s3.us-east-2.amazonaws.com/thumb/thumb0082.jpeg" />
        )}
        </Item>
        <Item
        original="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0123.jpg"
        thumbnail="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0123.jpg"
        width="1180"
        height="1920"
        >
        {({ ref, open }) => (
            <img ref={ref} onClick={open} src="https://ifgama.s3.us-east-2.amazonaws.com/thumb/thumb0123.jpeg" />
        )}
        </Item>
        <Item
        original="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0115.jpg"
        thumbnail="https://ifgama.s3.us-east-2.amazonaws.com/IMG_0115.jpg"
        width="1180"
        height="1920"
        >
        {({ ref, open }) => (
            <img ref={ref} onClick={open} src="https://ifgama.s3.us-east-2.amazonaws.com/thumb/thumb0115.jpeg" />
        )}
        </Item>
      </Grid>
    
  </Gallery>
)

export default MyGallery;