import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  color: white;
  background: #1b1b1b;
`
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
`
export const Image = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
export const Hide = styled.div`
  overflow: hidden;
`