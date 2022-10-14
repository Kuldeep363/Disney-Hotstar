import React from 'react';
import styled from 'styled-components';

function Loading() {
  return (
    <Loader>
        <div className="loadingio-spinner-dual-ball-y3p7x0grfre">
            <div className="ldio-ysd6cj7y1a">
            <div></div><div></div><div></div>
            </div>
        </div>
    </Loader>
  )
}


const Loader = styled.div`
position:fixed;
height:100vh;
width:100vw;
background-color:rgb(0,0,0,0.8);
z-index:10;
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center;

@keyframes ldio-ysd6cj7y1a-o {
    0%    { opacity: 1; transform: translate(0 0) }
   49.99% { opacity: 1; transform: translate(50px,0) }
   50%    { opacity: 0; transform: translate(50px,0) }
  100%    { opacity: 0; transform: translate(0,0) }
}
@keyframes ldio-ysd6cj7y1a {
    0% { transform: translate(0,0) }
   50% { transform: translate(50px,0) }
  100% { transform: translate(0,0) }
}

.ldio-ysd6cj7y1a div {
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    top: 35px;
  }
  .ldio-ysd6cj7y1a div:nth-child(1) {
    background: #1ce783;
    animation: ldio-ysd6cj7y1a 1s linear infinite;
    animation-delay: -0.5s;
  }
  .ldio-ysd6cj7y1a div:nth-child(2) {
    background: #0063e5;
    animation: ldio-ysd6cj7y1a 1s linear infinite;
    animation-delay: 0s;
  }
  .ldio-ysd6cj7y1a div:nth-child(3) {
    background: #1ce783;
    animation: ldio-ysd6cj7y1a-o 1s linear infinite;
    animation-delay: -0.5s;
  }
  .loadingio-spinner-dual-ball-y3p7x0grfre {
    width: 100px;
    height: 100px;
    display: inline-block;
    overflow: hidden;
  }
  .ldio-ysd6cj7y1a {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-ysd6cj7y1a div { box-sizing: content-box; }
`

export default Loading


