import React from 'react'
import styled from 'styled-components'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Productions from './Productions'
import Recommends from './Recommends'
import Slider from './Slider'
import Trending from './Trending';

import { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import db from '../firebase';
import {setMovie} from '../features/movies/movieSlice';
import { selectUserName } from '../features/users/userSlice';

import { collection, getDocs } from "firebase/firestore"; 

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  

  useEffect(()=>{
    let recommend = []
    let newDisney = []
    let original = []
    let trending = []
    getDocs(collection(db, "movies"))
    .then( (result)=>{
      result.forEach((doc) => {
        switch (doc.data().type){
          case 'recommend':
            recommend =[...recommend,{id:doc.id, ...doc.data()}]
            break;
          case 'new':
            newDisney =[...newDisney,{id:doc.id, ...doc.data()}]
            break;
          case 'original':
            original =[...original,{id:doc.id, ...doc.data()}]
            break;
          case 'trending':
            trending =[...trending,{id:doc.id, ...doc.data()}]
            break;
          default:
            break;
        }
      });
      dispatch(setMovie({
        recommend: recommend,
        newDisney: newDisney,
        original: original,
        trending : trending,
      }))
    }); 
    

  },[userName])

  return (
    <Container>
        <Slider/>
        <Productions/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
    </Container>
  )
};

const Container = styled.main`
    position:relative;
    background: url('/images/home-background.png') center center no-repeat;
    background-size:cover;
    min-height: calc(100vh - 70px);
    margin-top:70px;
    overflow-x:hidden;
    padding: 0 48px;
    @media(max-width:768px){
      padding: 0 25px;
  }
`


export default Home
