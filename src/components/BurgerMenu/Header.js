import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = ({ open, setOpen }) => {

  const handleDropdown = () => {
    let closed = !open;
    setOpen(closed);
  }

  return (
    <Navbar open={ open } >
    <StyledMenu>   

        <Link to="/" onClick={handleDropdown}>
          Home
        </Link>    
      
        <Link to="/page1" onClick={handleDropdown}>
          Join the movement
        </Link>

        <Link to="/page2" onClick={handleDropdown}>
          Stories
        </Link>

        <Link to="/page3" onClick={handleDropdown}>
          Books
        </Link>

        <Link to="/page4" onClick={handleDropdown}>
          Podcast
        </Link>

        <Link to="/page5" onClick={handleDropdown}>
          About Us
        </Link>         
      
    </StyledMenu>

    <Spotlight>
    <SpotlightSection>
      <h4>This Weeks New Story</h4>
      <img to="/page2" onClick={handleDropdown} src='https://yt3.ggpht.com/ytc/AAUvwnhLiEyJOCpbbbF1e1fRMevbZRjmKxqAvPOPn_yBwg=s900-c-k-c0x00ffffff-no-rj' alt='stories ' />
      </SpotlightSection>    
    <SpotlightSection>
      <h4>Donate</h4>
      <img src='https://yt3.ggpht.com/ytc/AAUvwnhLiEyJOCpbbbF1e1fRMevbZRjmKxqAvPOPn_yBwg=s900-c-k-c0x00ffffff-no-rj' alt='stories ' />
      </SpotlightSection>
    </Spotlight>

    </Navbar>
  );
}


// Styling nav components
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  text-align: left;
  padding: 2rem;
  margin-left:0px;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;

  /* @media (max-width: 576px) {
      width: 100%;      
  } */

  a {
    font-size: 2rem;    
    /* text-transform: uppercase; */
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 3rem;
  transition: transform 0.5s ease-in-out;

  /* @media (max-width: 576px) {
      width: 100%;      
  } */

  a {
    font-size: 2rem;    
    /* text-transform: uppercase; */
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Spotlight = styled.div `
  display: flex;
  flex-direction: row; 
  @media (min-width:451px) AND (max-width: 800px) {
  margin:150px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  height:550px;
  width:200px;
  }

  @media (max-width: 450px) {
  display:none;
  overflow:hidden;
  }

  @media (max-width: 1375px) {
    display:flex;
  }
  `;

const SpotlightSection = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  margin:20px;
  margin-top:200px;

  @media (max-width: 800px) {
  height:50px;
  width:200px;
  }

  img {
    width:300px;
    height:300px;
    border-radius:25px;
    margin:15px;

    @media (max-width: 800px) {
    height:200px;
    width:200px;
    margin:0;
    }

  @media (max-width: 450px) {
  display:none;
  }
  
  }

`;


export default Header;