import "./intro.css";        //normal css
import React from 'react'
import { Link } from 'react-scroll';   
import bg from "../../assets/image44.png"
import btnImg from "../../assets/hireme.png"

const Intro = () => {
return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText"> I'm <span className="introName">Ashish,<br/></span>Website Devloper</span>
            <p className="introPara">I am a Skilled web developer with a passion for creating dynamic, user-friendly websites.<br/>
                I specialize in building seamless, scalable solutions that drive engagement and performance.</p>
            <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/> Hire Me</button></Link>
        </div>
        <img src={bg} alt="my image" className="bg" />
        <hr></hr>
    </section>
)
}

export default Intro;