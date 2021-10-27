import React from 'react'
import styled from 'styled-components'
// import img from "./view.svg"
import {AiFillHome, AiOutlinePlus} from "react-icons/ai";

const FourthBody = ({direction, img, title, subtitle,desc}) => {
    return (
        <Container>
            <Wrapper direction={direction}>
               <Image src={img}/>
               <TextArea>
                   <Title>{title}</Title>
                   <SubTitle>{subtitle}
                   </SubTitle>
                   <Desc>
                       {desc}
                   </Desc>
                   <LearAndIcon>
                       <Icon>
                           <AiOutlinePlus/>
                       </Icon>
                       <LearnText>Learn more</LearnText>
                   </LearAndIcon>
               </TextArea>
            </Wrapper>
        </Container>
    )
}

export default FourthBody

const LearnText = styled.div`
font-size: 18px;
font-weight: bold;
`

const Icon = styled.div`
margin-right: 10px;
font-size: 25px;
font-weight: bold;
color: black;

`
const LearAndIcon = styled.div`
display: flex;
`

const Desc = styled.div`
font-size: 18px;
margin-bottom: 20px;
color: gray;
`

const SubTitle = styled.div`
font-weight: bold;
font-size: 35px;
margin-bottom: 15px;
@media screen and (min-width:500px) and (max-width:1000px){
display: flex;
    width: 95%;
    justify-content: center;
    font-size: 28px;
    text-align: center;
}
`
const Title = styled.div`
font-size: 15px;
width: 100%;
margin-bottom: 5px;
font-weight: bold;
@media screen and (min-width:500px) and (max-width:1000px){
display: flex;
    width: 95%;
    justify-content: center;
}
`

const TextArea = styled.div`
width: 51%;
@media screen and (min-width:500px) and (max-width:1000px){
display: flex;
    width: 95%;
    justify-content: center;
    flex-direction: column;
}
`

const Image = styled.img`
width: 45%;
/* margin-right: 40px; */
object-fit: cover;
@media screen and (min-width:500px) and (max-width:1000px){
display: flex;
    width: 450px;
    justify-content: center;
    margin-bottom: 15px;
    
}
`

const Wrapper = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
flex-direction:  ${({direction}) => direction? "row-reverse": "row"};
@media screen and (min-width:500px) and (max-width:1500px){
display: flex;
    width: 95%;
    justify-content: center;
    align-items: center;
}
`

const Container = styled.div`
width: 100%;
display: flex;
color: black;
justify-content: center;
flex-wrap: wrap;
align-items: center;
margin-bottom: 120px;

`
