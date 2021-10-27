import React from 'react'
import styled from 'styled-components'
import img from "./priceicon.svg"
import img1 from "./compass.svg"
import {AiFillHome, AiOutlinePlus} from "react-icons/ai";

const FifthBody = () => {
    return (
        <Container>
            <Wrapper>
                <TheComp>
                    <Image src={img}/>
                    <Textarea>
                        <Title>See our price</Title>
                        <Body>
                            Whether you are a team of 2
                            or 2,000, there's a Trello 
                            tailor made for your organization.
                        </Body>
                        <Button>Trello Pricing</Button>
                    </Textarea>
                </TheComp>
                <TheComp>
                    <Image src={img1}/>
                    <Textarea>
                        <Title>Take a Trello tour</Title>
                        <Body>
                            Explore the worlds of boards and beyound
                            in Trello. Dive deeper into our most 
                            popular features.
                        </Body>
                        <Button>Tour Trello</Button>
                    </Textarea>
                </TheComp>
            </Wrapper>
        </Container>
    )
}

export default FifthBody

const Container = styled.div`
margin-top: 20px;
width:100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 100px;
@media screen and (min-width:320px) and (max-width:1250px){
    display: none;
}
`
const Wrapper = styled.div`
width: 70%;
border-top: solid 2px black;
border-bottom: solid 2px black;
height: 200px;
display: flex;
justify-content: space-around;
justify-content: center;;
align-items:center;
`
const TheComp = styled.div`
display: flex;
width: 45%;
margin-right: 20px;
padding-left: 40px;
`

const Image = styled.img`
width: 150px;
height: 150px;
object-fit: contain;
margin-right: 20px;
`

const Textarea = styled.div`
display: flex;
flex-direction: column;
`
const Title = styled.div`
font-size: 25px;
font-weight: bold;
margin-bottom: 10px;
`

const Body = styled.div`
width: 90%;
font-size: 17px;
margin-bottom: 15px;
`

const Button = styled.div`
width: 150px;
height: 35px;
border: solid 2px skyblue;
display: flex;
justify-content: center;
align-items: center;
`
