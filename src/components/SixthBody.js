import React,{useState, useRef, useEffect} from 'react'
import styled from "styled-components"
import img from "./ebay.png"
import img1 from "./egencia.png"
import img2 from "./detriot.png"
import img3 from "./sprout.png"

const SixthBody = () => {
    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    // const ref4 = useRef();

    const [quote, setQuote] = useState([
    "Everyone loves it; it has democractised our finance function. In some ways Trello shattered heiracht and brought us together.",
    "Very simple to use, great automation and keeps me on track with all i need to do. I also like that it can be shared with others",
    "Trello makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have veen key.",
    "Now that we've switched to a remote environment, with the use of TRello, we can now limit the number of meetings we have regarding specific projects and turn to Trello for updates instead.",

    ])

    const [myLogo, setMyLogo] = useState([img, img1, img2, img3])

    const [entreprise, setEntreprise] = useState([
        "eCommerce",
        "Travel",
        "Sport",
        "Marketing"
    ])

    const [Ceo, setCeo] = useState([
        "BHARATH SUNDAR",
        "KERRY PARKER-EVANS",
        "HARDON DOTSON",
        "HALEY ENNES"
    ])

    const [position, setPosition] = useState([
        "Finance, eBay",
        "IT Project Manager, Egencia",
        "Sales Manager, Detroit Red Wings",
        "HR Manager, Sprout Social"
    ])

    const [counter, setCounter] = useState(0);

    const addCounter = ()=>{
            setCounter(counter +1)
    }

    const minusCounter = ()=>{
        if(counter<=0){
            setCounter(4)
        }else{
            setCounter(counter -1)
        }
       
    }

    const colors = ["black", "lightgray", "lightgray", "lightgray",]
    const colors1 = ["lightgray", "black", "lightgray", "lightgray"]
    const colors2 = ["lightgray", "lightgray", "black", "lightgray"]
    const colors3 = ["lightgray", "lightgray", "lightgray", "black"]

    useEffect(()=>{
        ref.current.style.backgroundColor = colors[counter % colors.length]
        ref.current.style.transition = "all 350ms"
        console.log(counter)
    },[counter])
    useEffect(()=>{
        ref1.current.style.backgroundColor = colors1[counter % colors.length]
        ref1.current.style.transition = "all 350ms"
        console.log(counter)
    },[counter])
    useEffect(()=>{
        ref2.current.style.backgroundColor = colors2[counter % colors.length]
        ref2.current.style.transition = "all 350ms"
    },[counter])
    useEffect(()=>{
        ref3.current.style.backgroundColor = colors3[counter % colors.length]
        ref3.current.style.transition = "all 350ms"
    },[counter])

    return (
        <Container>
            <Wrapper>
                <Upper>
                    <Left>
                        <Logo src={myLogo[counter % myLogo.length]}/>
                        <BelowText>
                            <Ups>Industry</Ups>
                            <Downs>{entreprise[counter % entreprise.length]}</Downs>
                        </BelowText>
                    </Left>
                    <Right>
                        <Quotes>
                        "{quote[counter % quote.length]}
                        </Quotes>
                        <AnotherText>
                            <Up>{Ceo[counter % Ceo.length]}</Up>
                            <Down>{position[counter % position.length]}
                            </Down>
                        </AnotherText>
                    </Right>
                </Upper>
                <Lower>
                    <Button>
                        <ButtonIcon
                        onClick={()=>{
                            minusCounter(counter)
                         
                        }}>-</ButtonIcon>
                    </Button>
                    <CircleHolders>
                        <Circles ref={ref}
                        onClick={()=>{
                            setCounter(0)
                        }}/>
                        <Circles ref={ref1}
                        onClick={()=>{
                        setCounter(1)
                        }}/>
                        <Circles ref={ref2}
                                                onClick={()=>{
                                                    setCounter(2)
                                                }}/>
                        <Circles ref={ref3}
                                                onClick={()=>{
                                                    setCounter(3)
                                                }}/>
                    </CircleHolders>
                    <Button
                    onClick={()=>{
                        addCounter(counter)
                     
                    }}>
                        <ButtonIcon>+</ButtonIcon>
                    </Button>
                </Lower>
            </Wrapper>
        </Container>
    )
}

export default SixthBody

const Circles = styled.div`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: lightgray;
margin: 0 10px;

:hover{
    background-color: black;
    opacity: 0.5;
}
`
const CircleHolders = styled.div`
display: flex;
align-items: center;
`
const ButtonIcon = styled.div`
color: white;
display: flex;
justify-content: center;
font-size: 18px;
font-weight: bold;
`

const Button = styled.div`
width: 30px;
height: 30px;
background-color: black;
border-radius: 5px;
cursor: pointer;
transform: scale(1);
transition: all 350ms;
:hover{
transform: scale(1.02);
}
`

const Downs = styled.div`
font-weight: bold;
font-size: 14px;
`

const Ups = styled.div`
margin-bottom: 10px;
font-weight: bold;
font-size: 25px;
`
const Down = styled.div`
`

const Up = styled.div`
font-weight: bold;
`
const AnotherText = styled.div`
display: flex;
align-items: flex-end;
flex-direction: column;
`

const Quotes = styled.div`
font-size: 26px;
line-height: 38px;
letter-spacing: 0.5px;
font-family: arial;
width: 100%;
`
const Right = styled.div`
width: 70%;

`
const BelowText = styled.div`
display: flex;
flex-direction: column;
font-size: 20px;
`

const Logo = styled.img`
width: 100px;
height: 100px;
object-fit: contain;
margin-bottom: 30px;
/* background-color: black; */
`
const Left = styled.div`
display: flex;
flex-direction: column;
width: 35%;
padding-bottom: 30px;
`

const Lower = styled.div`
display: flex;
width: 100%;
`

const Upper = styled.div`
width: 100%;
display: flex;
margin-bottom: 30px;
border-bottom: 4px solid black;
`

const Container = styled.div`
width: 100%;
display: flex;
background-color: #E6FCFF;
margin-bottom: 50px;
justify-content: center;
align-items: center;
height: 350px;
margin-bottom: 100px;
`

const Wrapper = styled.div`
width: 67%;
display: flex;
align-items: center;
flex-direction: column;

`
