import React from 'react'
import styled from 'styled-components'
import img from "./apple.svg"
import img1 from "./google.svg"


const EightBody = () => {
    return (
        <Container>
            <Wrapper>
                <Items>
                    <Text>
                        Trello also works great 
                        on your smaller screen.
                    </Text>
                    <Logos>
                        <Logo src={img}/>
                        <Logo src={img1}/>
                    </Logos>
                </Items>
            </Wrapper>
        </Container>
    )
}

export default EightBody

const Logo = styled.img`
width: 170px;
height: 70px;
object-fit: contain;
/* background-color: black; */
margin: 0 10px;

`

const Logos = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Text = styled.div`
font-size: 18px;
color: black;
font-family: arial;
letter-spacing: 0.5px;
`

const Items = styled.div`
display: flex;
align-items: center;
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 100px;
background-color: #fafbfc;
`
const Wrapper = styled.div`
display: flex;
width: 70%;
justify-content: flex-end;
`
