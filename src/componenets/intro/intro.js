import React from 'react'
import './intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import boy from  '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
//import Glassesimoji from '../../img/glassesimoji.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../floatingDiv/floatingDiv';
import { motion } from 'framer-motion';

const transition = {duration : 2, type: 'spring'}

const intro = () => {
  return (
    <div className="intro" id="intro">
        <div className="i-left">

            <div className="i-name">
                <span>Hey! I am</span>
                <span>Adrian Carp</span>
                <span>Web Developer with entry level of experience in web designing and development.</span>
            </div>

            <button className="button i-button">Hire me</button>
            
            <div className="i-icons">
              <img src={Github} alt="" />
              <img src={LinkedIn} alt="" />
              <img src={Instagram} alt="" />
            </div>

        </div>


        <div className="i-right">
            <img src={boy} alt="" />

            <motion.div
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}            
            style={{top: '-4%', left: '68%'}}>
              <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
            </motion.div>

            <motion.div
            initial={{left: "-9rem", top: "18rem"}}
            whileInView={{left: "0rem"}}
            transition={transition}

            style={{top: '18rem', left: '0rem'}}>
              <FloatingDiv image={Thumbup} txt1="Design" txt2="Award"/>
            </motion.div>

            {/*Blur divs */}
            {/* <div className="blur" style={{background: 'rgb(238 210 255)'}}></div>            
            <div className="blur" style={{background: '#c1f5ff', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div> */}

        </div>
    </div>
  )
}

export default intro