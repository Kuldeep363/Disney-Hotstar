import React from 'react';

import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonLoader(props) {

    const s = props.style? 
      { ...props.style, backgroundColor:"rgb(26 39 55)",}
    
    :
    
    {
        inset:"0px",
        display:"block",
        height:"100%",
        objectFit:"cover",
        opacity:"1",
        position:"absolute",
        zIndex:"1",
        backgroundColor:"rgb(26 39 55)",
    } 



  return (
    <SkeletonTheme baseColor="#1a2838" highlightColor="#162e4b">
      <Skeleton  style={s} />
    </SkeletonTheme>
  )
}



export default SkeletonLoader
