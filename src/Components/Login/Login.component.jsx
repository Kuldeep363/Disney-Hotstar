import styled from "styled-components";

const Login = (props)=> {
  const loginClick = ()=>{
    document.getElementById('login').click();
  }
  return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp  onClick={loginClick}>GET ALL THERE</SignUp>
                <Description>You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Content>
    </Container>
  )
}

const Container = styled.section`
overflow:hidden;
height:100vh;
display:flex;
flex-direction:column;
text-align:center;
background-image: url("/images/login-background.jpg");
background-size:cover;
`

const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`

const CTA = styled.div`
max-width:650px;
display:flex;
flex-direction:column;
justify-content:center;
width:100%;
`
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%
`
const SignUp = styled.button`
font-weight:bold;
color:#fefefe;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border-radius:4px;
border:1px solid transparent;
cursor:pointer;
&:hover{
    background-color:#0483ee;
}

`

const Description = styled.p`
color:#fefefe;
font-size:11px;
margin:0 0 24px;
line-height:1.5;
letter-spacing:1.5px;
`
const CTALogoTwo = styled.img`
width:100%;
margin-bottom:20px;.
`

export default Login
