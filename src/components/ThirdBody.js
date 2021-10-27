import React from 'react'
import styled from 'styled-components'

const ThirdBody = () => {
    return (
        <Container>
            <Wrapper>
               <Title>
                   Features to help your team succeed
               </Title>
               <Desc>
                   Powering and productive teams using 
                   a powerful tool (and plenty of snacks).
                   From meetings and projects to events and
                   goal settings, Trello's intitutive features
                   gives any team the ability to quickly set up
                   and customize workflows fro just about anything.

               </Desc>
            </Wrapper>
        </Container>
    )
}

export default ThirdBody

const Desc = styled.div`
width: 60%;
font-size: 18px;
line-height: 28px;
@media screen and (min-width:500px) and (max-width:900px){
   
    display: flex;
    width: 100%;
    
    
}
`

const Title = styled.div`
width: 50%;
font-weight: bold;
font-size: 35px;
margin-bottom: 20px;
@media screen and (min-width:500px) and (max-width:900px){

    display: flex;
    width: 100%;
    justify-content: center;
    
}
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 80px;
`

const Wrapper = styled.div`
width: 70%;
display: flex;
padding-top: 30px;
flex-direction: column;
@media screen and (min-width:500px) and (max-width:1000px){
display: flex;
    width: 95%;
    justify-content: center;
}
`
