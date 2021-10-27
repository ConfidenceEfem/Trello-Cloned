import React from 'react'
import styled from 'styled-components'
import img from "./img1.png"
import img1 from "./costco.png"
import img2 from "./img4.png"
import img3 from "./square.png"
import img4 from "./google.png"

const SecondBody = () => {
    return (
        <Container>
            <Wrapper>
                <Title>It's more than 
                    work. It's a way of working 
                    together.
                </Title> 
                <Desc>
                    Start with a trello boards,
                    list and cards. Customize and expand
                    with more features as your teamwork grows.
                    Manage projects, organize task and build 
                    team spirit-all in one place.
                </Desc>
                <Button>
                    <Text>Start doing</Text>
                    {/* <Icon></Icon> */}
                   </Button>
                   <Image src={img}/>
                   <BelowText>
                       <First>Join over 1,000,000 teams worldwide that are
                           using Trello to get more done
                       </First>
                       <Second>
                           <Logos src={img1}/>
                           <Logos src={img2}/>
                           <Logos src={img3}/>
                           <Logos src={img4}/>
                       </Second>
                   </BelowText>
            </Wrapper>
        </Container>
    )

}

export default SecondBody

const Logos =  styled.img`
width: 90px;
height: 90px;
object-fit: contain;
background-color: transparent;
margin: 0 15px;

`

const Second = styled.div`
   justify-content: center;
   align-items: center;
    display: flex;
@media screen and (max-width:900px) and (min-width:320px) {
   justify-content: center;
   align-items: center;
    display: flex;
    width: 100%;
}
`
const First = styled.div`
margin-bottom: 10px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
text-align: center;
`
const BelowText = styled.div`
display: flex;
font-size: 18px;
margin-bottom: 20px;
flex-direction: column;
`

const Image = styled.img`
width: 90%;
height: 750px;
object-fit: cover;
margin-bottom: 20px;
/* box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px; */
@media screen and (max-width:900px) and (min-width:320px) {
    object-fit: cover;
    height: 300px;
    margin-bottom: 20px;
    
}
`
const Icon = styled.div`
width: 30px;
height: 30px;
background-color: blue;
`
const Text = styled.div`
font-size: 17px;

`

const Button = styled.div`
width: 180px; 
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border: solid 2px skyblue;
border-radius:5px;
margin-bottom: 40px;
cursor: pointer;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.02);
}
@media screen and (min-width:320px) and (max-width:900px){
margin-bottom: 20px;
    
}


`

const Desc = styled.div`
width: 90%;
text-align: center;
line-height: 30px;
font-size: 20px;
margin-bottom: 30px;
@media screen and (min-width:320px) and (max-width:900px){
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: center;
    
}
`

const Title = styled.div`
font-size: 35px; 
color: black;
font-weight: bold;
margin-bottom: 10px;
text-align: center;
@media screen and (min-width:320px) and (max-width:900px){
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: center;
    
}
`

const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-bottom: 40px;
/* background-color: skyblue; */
`
const Wrapper = styled.div`
padding-top: 70px;
width: 80%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width:320px) and (max-width:900px){
    text-align: center;
    display: flex;
    width: 95%;
    justify-content: center;
    
}


`
