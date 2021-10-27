import React from 'react'
import styled from 'styled-components'


const SeventhBody = () => {
    return (
        <Container>
            <Wrapper>
                <Text>
                    Sign up and get started with 
                    Trello today. A world of
                    productive teamwork awaits!
                </Text>
                <Buttons>
                    <Button1 placeholder="Email"/>
                    <Button2>Sign up</Button2>
                </Buttons>
            </Wrapper>
        </Container>
    )
}

export default SeventhBody

const Button2 = styled.div`
width: 33%;
height: 40px;
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
background-color: blue;
color: white;
font-weight: bold;
border-radius: 5px;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.03);
}
`

const Button1 = styled.input`
width: 42%;
height: 40px;
background-color: white;
border-radius: 5px;
border: none;
padding-left: 10px;
margin-right: 20px;
`
const Buttons = styled.div`
display: flex;
width: 60%;
justify-content: center;
`
const Text = styled.div`
text-align: center;
font-size: 25px;
color: white;
font-family: sans-serif;
font-weight: bold;
width: 60%;
margin-bottom: 45px;

`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 70px;
`

const Wrapper = styled.div`
width: 70%;
height: 300px;
display: flex;
justify-content: center;
background-color: skyblue;
align-items: center;
flex-direction: column;
border-radius: 10px;
`
