import React from 'react'
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ImgSlider() {
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
    };

  return (
    <Carousel {...settings}>
        <Wrap>
            <a href='/'>
                <img src="/images/slider-badging.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a href='/'>
                <img src="/images/slider-scale.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a href='/'>
                <img src="/images/slider-badag.jpg" alt="" />
            </a>
        </Wrap>
        <Wrap>
            <a href='/'>
                <img src="/images/slider-scales.jpg" alt="" />
            </a>
        </Wrap>
    </Carousel>
  )
}

const  Carousel = styled(Slider)`
    margin-top:25px;

    & > button{
        opacity:0.1;
        z-index:1;
        transition: 0.2s opacity ease-in-out;

        &:hover{
            opacity:1;
        }
    }

    ul li button{
        &:before{
            font-size:10px;
            color: rgb(150,158,171);
        }
    }
    li.slick-active button:before{
        color: #fefefe;
    }
    .slick-list{
        overflow:initial;
    }
    .slick-prev{
        left:-30px;
    }
    .slick-next{
        right:-30px;
    }
`

const Wrap = styled.div`
    cursor:pointer;
    padding: 0 2px;
    img{
        border-radius: 10px;
        width:100%;
        border:2px solid transparent;
        transition: 0.3s all ease-in-out;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        
        &:hover{
            border:2px solid #fefefe;
        }
    }
`

export default ImgSlider
