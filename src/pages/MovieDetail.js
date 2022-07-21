import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const url = "/work/" + id;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <Details
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie} />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => {
                            <Award 
                                title={award.title} 
                                description={award.description} 
                                key={award.title}
                            />
                        })}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="movie" />
                    </ImageDisplay>
                </Details>
            )}
        </>    
    )
}

//Styles
const Details = styled(motion.div)`
    color: white;
    background: #1b1b1b;
`;
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        color: white;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;
const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
    }
    p {
        padding: 2rem 0rem;
    }
`;
const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

//Award component
const Award = ({ title, description }) => {
    return (
      <AwardStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </AwardStyle>
    );
};

export default MovieDetail;