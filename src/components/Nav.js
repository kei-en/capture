import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link to="/" id="logo">Capture</Link>
            </h1>
            <ul>
                <li>
                  <Link to="/">About us</Link>  
                </li>
                <li>
                  <Link to="/work">Our work</Link>  
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>  
                </li>
            </ul>
        </StyledNav>
    )
}


const StyledNav = styled.div`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a{
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 2rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`

export default Nav;