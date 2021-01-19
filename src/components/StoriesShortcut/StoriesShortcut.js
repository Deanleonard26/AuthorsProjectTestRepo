import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css'
<style>@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');</style>;
<style>@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');</style>

const StoriesShortcut = () => {
    useEffect (() => {
        Aos.init({duration:3000});
    }, []);
      return (
            <StoryWrapper>
                <StoryText>
                    <h4>STORIES FROM AROUND THE WORLD</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                </StoryText>
                <StoryImgLinks>
                    <img data-aos='fade-up' src='https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' />
                    <ImgWrapper><img data-aos='fade-up' data-aos-duration="3000" src='https://images.unsplash.com/photo-1610916975200-6d28742d4dd6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' /></ImgWrapper>
                    <ImgWrapper><img data-aos='fade-up' data-aos-duration="3000" src='https://images.unsplash.com/photo-1610801264293-588a3b6c3446?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' /></ImgWrapper>
                </StoryImgLinks>
            </StoryWrapper>
      )
}

const StoryWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;
width:100%;
`
const ImgWrapper = styled.div `
    @media (max-width:600px) {
        display:none;
    }
`

const StoryImgLinks = styled.div`
display:flex;
flex-direction:row;
justify-content:left;
flex-wrap:wrap;


img {
    width:350px;
    height:450px;
    margin:10px 25px;
    border-radius:3px;
}

@media (min-width:601px) AND (max-width:800px) {
        justify-content:center;
        width:90%;
    img {
        width:170px;
        height:200px;
        margin:20px;
    }

    @media (max-width:600px) {
        display:flex;
        justify-content:left;
        width:100%;
        margin-left:100px;
        
        img {
            width:250px;
            height:350px;
        }
    }
}

@media (min-width:801px)and (max-width:1400px) {
    img {
        width:240px;
        height:280px;
    }
}
`

const StoryText = styled.p` 
display:flex;
flex-direction:column;
justify-content:left;
text-align:left;
align-items:left;
width:80%;
font-family: 'Space Mono', monospace;

h4{
    font-weight:400;
    font-size:25px;
    width:40%;
}

p {
    font-weight:100;
    color:black;
    width:40%;
}

@media (max-width:600px) {
    h4{
    width:85%;
    margin-bottom:10px;
}

p {
    font-size:12px;
    width:70%;
}
}
`


export default StoriesShortcut;