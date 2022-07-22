import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation , titleAnim} from "../animation";
import styled from "styled-components";

const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <Hide>                
                <Social variants={titleAnim}>
                    <Circle />
                    <h2>Send us a message</h2>
                </Social>
            </Hide>
            <Hide>                
                <Social variants={titleAnim}>
                    <Circle />
                    <h2>Contact information</h2>
                </Social>
            </Hide>
            <Hide>                
                <Social variants={titleAnim}>
                    <Circle />
                    <h2>Social media pages</h2>
                </Social>
            </Hide>
        </ContactStyle>
    )
}

//Styles
const ContactStyle = styled(motion.div)`
    padding: 3rem 10rem;
    color: white;
    min-height: 90vh;
    background: #1b1b1b;

    @media (max-width: 1000px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;
const Title = styled.div`
    margin-bottom: 4rem;
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #dddddd;
`;
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`;

export default ContactUs;