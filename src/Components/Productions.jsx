import React from 'react'
import styled from 'styled-components';

function Productions() {
  return (
   <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" alt="production" />
            <video autoPlay loop muted playsInline>
                <source src='/videos/disney.mp4' type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" alt="production" />
            <video  autoPlay loop muted playsInline>
                <source src='/videos/pixar.mp4' type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" alt="production" />
            <video autoPlay loop muted playsInline>
                <source src='/videos/marvel.mp4' type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" alt="production" />
            <video autoPlay loop muted playsInline>
                <source src='/videos/star-wars.mp4' type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" alt="production" />
            <video autoPlay loop muted playsInline>
                <source src='/videos/national.mp4' type='video/mp4' />
            </video>
        </Wrap>
   </Container>
  )
}

const Container = styled.div`
margin-top: 30px;
padding: 30px 0px 26px;
display:grid;
grid-gap:25px;
gap:25px;
grid-template-columns:repeat(5, minmax(0,1fr));
@media(max-width:768px){
    grid-template-columns:repeat(1, minmax(0,1fr))
}
`
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 6px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    position: relative;
    border:2px solid rgb(249,249,249, 0.1);
    transition: 0.3s all ease-in-out;

    img{
        inset:0px;
        display:block;
        height:100%;
        object-fit:cover;
        opacity:1;
        position:absolute;
        z-index:1;
    }

    video{
        width:100%;
        height:100%;
        border-radius:10px;
        position:absolute;
        top:0;
        left:0;
        opacity:0;
        z-index:-1;
        transition: 0.3s opacity ease-in-out;
    }

    &:hover{
        border: 2px solid #fefefe;
        box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -6px,
            rgb( 0 0 / 72%) 0px 30px 22px -10px;
        transform:scale(1.04);
        video{
            opacity:1;
        }
    }

`

export default Productions
