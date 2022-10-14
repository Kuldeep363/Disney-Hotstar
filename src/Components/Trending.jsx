import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movies/movieSlice";
import SkeletonLoader from "./SkeletonLoader";

function Trending() {
    const movies = useSelector(selectTrending);
  return (
    <Conatiner>
        <h4>Trendings</h4>
        <Content>
        {
                movies ?
                movies.map((movie,key)=>{
                    return(
                        <Wrap key={key}>
                            <Link to={'/details/'+movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    )
                })
                :<>
                <Wrap >
                    <SkeletonLoader/>
                </Wrap>
                <Wrap >
                    <SkeletonLoader/>
                </Wrap>
                <Wrap >
                    <SkeletonLoader/>
                </Wrap>
                <Wrap >
                    <SkeletonLoader/>
                </Wrap>
                </>
            }
        </Content>
    </Conatiner>
  )
}

const Conatiner = styled.div`
padding: 0 0 26px;
`

const Content = styled.div`
margin-top:25px;
display:grid;
grip-gap:25px;
gap:25px;
grid-template-columns: repeat(4,minmax(0,1fr));
@media(max-width:768px){
    grid-template-columns: repeat(2,minmax(0,1fr))
}
`
const Wrap = styled.div`
padding-top:56.25%;
border-radius:10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor:pointer;
overflow:hidden;
position:relative;
transition: 0.3s all ease-in-out;
border: 2px solid rgb(246,246,246,0.1);
img{
    inset:0px;
    display:block;
    height:100%;
    object-fit:cover;
    opacity:1;
    position:absolute;
    z-index:1;
}
&:hover{
    border-color: #fefefe;
    transform:scale(1.04);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -6px,
        rgb( 0 0 / 72%) 0px 30px 22px -10px;
}
`
export default Trending
