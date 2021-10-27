import React from 'react'
import styled from 'styled-components'
import img from "./img.png"

const FirstBody = () => {
    return (
        <Container>
            <Wrapper>
                <Text>
                    <Title>Trello helps teams move work forward.</Title>
                    <Desc>
                        Collaborate, manage projects, and reach new 
                        productivity peaks. From high rises to the home
                        office, the way your team works is
                        unique-accomplish it all white Trello.
                    </Desc>
                    <Buttons>
                        <Email placeholder="Email"/>
                        <SignUp>
                            Sign up-it's free!
                        </SignUp>

                    </Buttons>
                </Text>
                <Image src={img}/>
            </Wrapper>
        </Container>
    )
}

export default FirstBody

const Desc = styled.div`
width: 100%;
font-size: 22px;
line-height: 25px;
margin-bottom: 35px;
/* background-color: purple; */
@media screen and (min-width:320px) and (max-width:900px){
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: center;
    
}
`
const Buttons = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
/* background-color: purple; */
@media screen and (max-width:800px) and (min-width: 320px){
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
}
`
const Email = styled.input`
width: 290px;
height: 40px;
border-radius: 8px;
display: flex;
align-items: center;
border: solid gray 2px;
padding-left: 10px;
font-size: 17px;
letter-spacing: 0.4px;
margin-right: 20px;
@media screen and (max-width:700px) and (min-width: 320px){
    display: none;
}
`
const SignUp = styled.div`
width: 225px;
color: white;
letter-spacing: 0.4px;
height: 42px;
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(34,127,250);
font-size: 17px;
border: none;
border-radius: 5px;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.03);
    cursor: pointer;

}
@media screen and (min-width: 320px) and (max-width:700px){
    width: 400px;
}
`


const Image = styled.img`
width: 500px;
height: 500px;
object-fit: contain;
@media screen and (max-width:900px) and (min-width:320px) {
    display: none;
}
`
const Title = styled.div`
font-size: 40px;
width:100%;
margin-bottom: 20px;
font-weight: bold;
/* background-color: purple; */
@media screen and (min-width:320px) and (max-width:900px){
   text-align: center;
   width: 95%;
   display: flex;
   font-size: 40px;
   justify-content: center;
   align-items: center;
  /* background-color: green; */
}
`
const Text = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
/* background-color: green; */
width: 40%;

@media screen and (min-width:320px) and (max-width:900px){
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    
}
`

const Container = styled.div`
background-image: linear-gradient(to bottom,#ECE9FF, white);
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-top: 70px;

@media screen and (min-width:320px) and (max-width:1250px){
    width: 100%;
}


/* align-items: center; */

/* height: 50px; */
`
const Wrapper = styled.div`
padding-top: 50px;
width: 100%;
display: flex;
justify-content: center;
/* background-color: red; */
padding-left: 70px;
align-items: center;
flex-wrap: wrap;
@media screen and (min-width:320px) and (max-width:1250px){
    padding-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
}

`
