import React from "react";
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';
import { About, Description, Hide, Image } from "../styles";
//Animation
import { motion } from "framer-motion";
import { titleAnim, fade, imageAnim } from "../animation";
//Component
import Wave from '../components/Wave';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                  <Hide>
                    <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                  </Hide>
                  <Hide>
                    <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
                  </Hide>
                  <Hide>
                    <motion.h2 variants={titleAnim}>come true.</motion.h2>
                  </Hide>  
                </div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={imageAnim} src={home1} alt="guy behind a camera" />
            </Image>
            <Wave />
        </About>
    )
}


export default AboutSection;