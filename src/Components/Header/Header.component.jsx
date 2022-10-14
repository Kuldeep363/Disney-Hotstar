import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {auth, provider} from '../../firebase';
import {  signInWithPopup,signInWithRedirect,signOut } from "firebase/auth";

import { useDispatch ,useSelector } from "react-redux";

import { useState } from "react";


import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState
} from '../../features/users/userSlice';
import { useEffect } from "react";
import Loading from "../Loading";

function Header() {

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            setLoading(true);
            if (user){
                setUser(user);
                history('home');
                setLoading(false);
            }else{
                setLoading(false);
                history('/');
            }
        })
    },[userName])




    const handleAuth =  ()=>{
        if(!userName){
            signInWithPopup(auth, provider)
            .then((result)=>{
                setUser(result.user)
            })
            .catch((err)=>{
                
            })
        }else if (userName){
            signOut(auth)
            .then(()=>{
                dispatch(setSignOutState())
                history('/')
            })
            .catch((err)=>{
                
            })
        }
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                emil: user.email,
                photo: user.photoURL,
            })
        )
        history('home')
    }


  return (
    <Nav>
        <Logo>
            <Link to="home">
                <img src="/images/disney-hotstar-logo-dark.svg" alt="disney+" />
            </Link>
        </Logo>
        { userName ?
        <>
            <NavMenu>
                <Link to="home">
                    <span>HOME</span> 
                </Link>
                <Link to="home">
                    <span>SEARCH</span> 
                </Link>
                <Link to="home">
                    <span>WATCHLIST</span> 
                </Link>
                <Link to="home">
                    <span>ORIGINALS</span> 
                </Link>
                <Link to="home">
                    <span>MOVIES</span> 
                </Link>
                <Link to="home">
                    <span>SERIES</span> 
                </Link>
            </NavMenu>
            {/* <LoginBtn onClick={handleAuth}>LOGOUT</LoginBtn> */}
            <User>
                <UserImg src={userPhoto} alt="user avatar"  />
                <Logout onClick={handleAuth} title="click to logout">Logout</Logout>
            </User>
        </>
        :
        <>
            <LoginBtn onClick={handleAuth} id="login">LOGIN</LoginBtn>
        </>
        }
        {
            loading?
            <Loading/>
            :''
        }
    </Nav>
  )
}

const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background: #111;
display:flex;
justify-content:space-between;
align-items:center;
padding: 0 48px;
z-index:3;

@media(max-width:768px){
    padding: 0 25px;
}
`
const Logo = styled.div`
max-height:70px;
margin-bottom:4px;
img{
    display:block;
    width:100%;
}
`
const NavMenu = styled.div`
display:flex;
align-items:center;
flex-flow:row nowrap;
height:100%;
justify-content: flex-end;
position:relative;
margin-right:auto;
margin-left:25px;
height:100%;
a{
    display:flex;
    align-items:center;
    padding: 0 12px;
    position:relative;
    span{
        position:relative;
    }
    span::before{
        content:'';
        position:absolute;
        left:0;
        bottom:-7px;
        width:0%;
        height:2px;
        background-color:#fefefe;
        transition: 0.3s width ease-in-out;
    }
    &:hover{
        span:before{
            width:100%
        }
    }
@media(max-width:768px){
    display:none;
}
}
`

const LoginBtn = styled.a`
background-color: linear-gradient(to bottom, #141b29, #0c111b 300px);
border-radius:4px;
padding:7px 10px;
text-decoration:none;
border: 1px solid #fefefe;
cursor:pointer;

&:hover{
    background-color: #fefefe4d;
}
`
const User = styled.div`
position:relative;
&:hover p{
    opacity:1;
}
`

const UserImg = styled.img`
width:35px;
border-radius:10px;
`
const Logout = styled.p`
padding:7px 15px;
cursor:pointer;
position:absolute;
bottom:-30px;
right:0;
background:#0483ee;
border-radius:5px;
opacity:0;
transition: 0.3s all ease-in-out;
@media(max-width:768px){
    font-size:12px;
}
`

export default Header;

export const authControl = Header.handleAuth;