import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import { motion } from "framer-motion";
import { 
    pageAnimation, 
    fade, 
    imageAnim, 
    lineAnim,
    slider,
    sliderContainer
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <motion.div variants={sliderContainer}>                
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>                        
                        <motion.img variants={imageAnim} src={athlete} alt="a boxer staring out the boxing ring" />
                    </Hide>
                </Link>
            </Movie>
            <Movie 
                variants={fade}
                animate={controls}
                initial='hidden'
                ref={element}
            >
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>                        
                        <motion.img variants={imageAnim} src={theracer} alt="a woman leaning on a yellow car" />
                    </Hide>
                </Link>
            </Movie>
            <Movie
            variants={fade}
            animate={controls2}
            initial='hidden'
            ref={element2}>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>                        
                        <motion.img variants={imageAnim} className="goodtimes" src={goodtimes} alt="two people cuddling under a tree" />
                    </Hide>
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    )
}

//Styles
const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem;
    background: #1b1b1b;
    @media (max-width: 1000px) {
        padding: 2rem 2rem;
    }
`;
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    h2 {
        padding: 1rem 0rem;
        color: white;
    }
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    .goodtimes {
        object-position: 100% 100%;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Frame1 = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background:#8effa0 ;
`;

export default OurWork;