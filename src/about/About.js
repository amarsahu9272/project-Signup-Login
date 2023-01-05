import React from 'react'
import reactLogo from "../amr.png";
import style from './About.module.css'

function About() {
    return (
        <>
            <div className={style.outer}>
                {/* <div><h1>About Us</h1></div> */}
                <div className={style.para}><img className={style.im} src={reactLogo} alt='About'/><span ><p>First of all, thank you for giving me this opportunity to introduce myself in front of you.
                    My name is Amar Sahu. I am from Jamshedpur. I have completed my Graduation from University Of Calcutta, in computer science and Engineering. Now I am pursuing Front-end course  from FunctionUp.
                    I choose Front-end course because I want to make my career in this field.
                    Coming to my technical skill: I have a basic knowledge about JavaScript,ReactJs,git.
                    If I talk about my hobbies,I love traveling and exploring new places,and listening to music.
                    My weakness is I m getting nervous when I interact with new people but I try to overcome my weakness secondly I trust people easily.
                    My strength is I'm a disciplined person, punctual, and I have a positive attitude.
                    My short-term goal is to get a job in a reputed company and long-term goal is to get a higher position in an organization and want to build my career.
                    That's all from my side.
                    <p>Thankyou!</p>
                    </p></span></div><br />
                <span className={style.spn}>Age:25</span><br />
                <span className={style.spn}>Location:Jamshedpur</span>
                <div className={style.box}>
                    <div className={style.dv}>I have Skills in JavaScript, React</div>
                    <div className={style.dv}>My Hobby is Travelling, Playing Cricket, Listening Music</div>
                    <div className={style.dv}>In ReactJs I've keen knowledge about DOM, Virtual DOM, Jsx,Functional Component, Hooks-useStata, useEffect, useRef, useMemo, useRecoilState, useRecoilValue</div>
                </div>
            </div>
        </>
    )
}

export default About
