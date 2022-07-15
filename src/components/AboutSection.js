import React from "react";
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                  <Hide>
                    <h2>We work to make</h2>
                  </Hide>
                  <Hide>
                    <h2>your <span>dreams</span></h2>
                  </Hide>
                  <Hide>
                    <h2>come true.</h2>
                  </Hide>  
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.</p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy behind a camera" />
            </Image>
        </About>
    )
}


export default AboutSection;