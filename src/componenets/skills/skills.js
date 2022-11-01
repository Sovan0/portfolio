import React from 'react'
import "./skills.css"
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png"
import Card from "../card/card"
import Engleza from "./engleza.pdf"
import Romana from "./romana.pdf"
import { motion } from "framer-motion";

const transition = { duration: 1, type: "spring"};

const skills = () => {
  return (
    <div className="skills" id="skills">

        {/* left */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>skills</span>
            <spane>For more details download my cv below.</spane>
            <a href={Engleza} download>
                <button className="button s-button">Download CV</button>
            </a>
            <a href={Romana} download>
                <button className="button s-button">Descarca CV</button>
            </a>
            {/* <div className="blur s-blur1" style={{background: '#c1f5ff'}}></div> */}
        </div>

        {/* right */}
        <div className="cards">
            <motion.div 
            initial={{ top: '-5rem',left: '17rem' }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            // style={{top: '-5rem',left: '11rem'}}
            >
                <Card
                     emoji = {HeartEmoji}
                     heading = {'Design'}
                     detail = {"Figma, Photoshop, Illustrator"}
                />
            </motion.div>
            <motion.div 
            initial={{ top: '10rem', left: '-17rem' }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            // style={{top: '10rem', left: '-7rem'}}
            >
                <Card
                     emoji = {Glasses}
                     heading = {'Developer'}
                     detail = {"Html, CSS, JavaScript"}
                />
            </motion.div>
            <motion.div 
            initial={{ top: '18rem', left: '-11rem' }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            // style={{top: '18rem', left: '-11em'}}
            >
                <Card
                     emoji = {Humble}
                     heading = {'Framework'}
                     detail = {"React"}
                />
            </motion.div>
        </div>
    </div>
  )
}

export default skills