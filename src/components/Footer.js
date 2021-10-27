import React from 'react'
import styled from 'styled-components'
import img from "./atlass.svg"

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <English>English</English>
                <Links>
                    <Nav>Templates</Nav>
                    <Nav>Pricing</Nav>
                    <Nav>Apps</Nav>
                    <Nav>Jobs</Nav>
                    <Nav>Blog</Nav>
                    <Nav>Developers</Nav>
                    <Nav>About</Nav>
                    <Nav>Help</Nav>
                    <Nav>Legal</Nav>
                    <Nav>Cookie Settings</Nav>
                    <Nav>Privacy</Nav>
                    </Links>

                    <AtLogo src={img}/>
                    <Copy>@ Copyright 2021. All rights reserved</Copy>
            </Wrapper>
        </Container>
    )
}

export default Footer

const Copy = styled.div``
const AtLogo = styled.img`
width: 120px;
height: 120px;
object-fit: contain;
`
const Nav = styled.div`
text-decoration: underline;
color: gray;
transition: all 350ms;
:hover{
color: black;
cursor: pointer;
}

`
const Links = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
`

const English = styled.div`
width: 200px;
height: 40px;
display: flex;
align-items: center;
border: solid 1px lightgray;
padding-left: 20px;
color: gray;
margin-bottom: 30px;
cursor: pointer;
`

const Container = styled.div`
width: 100%;
display:flex;
margin-bottom: 50px;
align-items: center;
justify-content: center;

`
const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
