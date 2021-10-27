import React from 'react'
import styled from "styled-components"
import FirstBody from './FirstBody'
import FourthBody from './FourthBody'
import HeaderNav from './HeaderNav'
import SecondBody from './SecondBody'
import ThirdBody from './ThirdBody'
import img from "./view.svg"
import img1 from "./img5.svg"
import img2 from "./img6.png"
import img3 from "./img7.png"
import FifthBody from './FifthBody'
import SixthBody from './SixthBody'
import SeventhBody from './SeventhBody'
import EightBody from './EightBody'
import Footer from './Footer'


const HomeScreen = () => {
    return (
        <Container>
            <Wrapper>
                <HeaderNav/>
                <FirstBody/>
                <SecondBody/>
                <ThirdBody/>
                <FourthBody
                img={img}
                title="CHOOSE A VIEW"
                subtitle="The board is just the beginning"
                desc="Lists and cards are the building
                blocks of organizing work on a 
                Trello board. Grow from there 
                with task assignments, timelines
                productivity metrics, calendars,
                and more."/>
                <FourthBody
                direction
                img={img1}
                title="DIVE INTO THE DETAILS"
                subtitle="Cards contain everything you need"
                desc="Trello cards are your portal
                to more organized work-where every single
                part of your task can be managed, tracked, and
                shared with teammates. Open any card to uncover 
                an ecosystem of checklists, due dates, attachments,
                conversation and more."
                />
                <FourthBody
                img={img2}
                title="MEET YOUR NEW BUTLER"
                subtitle="No-code automation"
                desc="Let the robots do the work-so that your team 
                can focus on works that matters.
                With Trello's built-in-automation, Butler, reduce
                the number of tedius tasks (and clicks)
                on your project board by harnessing the power
                of automation across your entire team"/>
                <FourthBody
                direction
                title="POWER UPS"
                subtitle="Integrate top work tools"
                desc="Easily connect the apps your team already users
                into your Trello workflow, or add a Power-Up that helps fine-tune
                one specific need. With hundreds of Power-Ups available, 
                your team's workflow wishes are covered."
                img={img3}/>
                <FifthBody/>
                <SixthBody/>
                <SeventhBody/>
                <EightBody/>
                <Footer/>
            </Wrapper>
        </Container>
    )
}

export default HomeScreen

const Container = styled.div``
const Wrapper = styled.div``
