import React from 'react';
import styled from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>

const StoriesShortcut = () => {
      return (
            <StoryWrapper>
                <StoryText>
                    <h4>STORIES FROM AROUND THE WORLD</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                </StoryText>
                <StoryImgLinks>
                    <img src='https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' />
                    <img src='https://images.unsplash.com/photo-1610916975200-6d28742d4dd6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' />
                    <img src='https://images.unsplash.com/photo-1610801264293-588a3b6c3446?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' />
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

@media (max-width:800px) {
    img {
        width:170px;
        height:200px;
        margin:5px;
        display:block;
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
    font-weight:thin;
    width:40%;
}

@media (max-width:600px) {
    h4{
    width:85%;
}

p {
    width:70%;
}
}
`


export default StoriesShortcut;