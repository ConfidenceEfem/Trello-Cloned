import React from 'react'
import styled from "styled-components"
import logo from "./logo.png"

const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={logo}/>
                <RightCont>
                    <Log>Log in</Log>
                    <Sign>Sign up</Sign>
                </RightCont>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const Sign = styled.div`
    width: 100px;
    background-color: rgb(34,127,250);
    color: white;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-family: arial;
    font-weight: bold;
    letter-spacing: 0.5px;
    transform: scale(1);
    cursor: pointer;
    transition: all 350ms;
    margin-left: 25px;
    
    :hover{
        transform: scale(1.03);
    }
`
const Log = styled.div`
    color: rgb(34,127,250);
    cursor: pointer;
    transform: scale(1);
    font-size: 17px;
    transition: all 350ms;
    :hover{
        transform: scale(1.1);
    }
`
const RightCont  =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Logo = styled.img`
    width: 130px;
    height: 130px;
    object-fit: contain;
    /* background-color: blue; */
   
`

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: black;
    color: white;
    background-color: transparent;
    position: fixed;
    margin-bottom: 350px;
 
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
   height: 100%;
   
`
