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
`

const StoryImgLinks = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
flex-wrap:wrap;


img {
    width:350px;
    height:450px;
    margin:20px 40px;
    border-radius:3px;
}
`

const StoryText = styled.p` 
display:flex;
flex-direction:column;
text-align:left;
width:40%;
margin-left:120px;
font-family: 'Space Mono', monospace;

h4{
    font-weight:400;
    font-size:25px;
}

p {
    font-weight:thin;
}
`


export default StoriesShortcut;