import React, {useEffect} from 'react';
import styled from 'styled-components';
<style>@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');</style>;
<style>@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');</style>

const Scrollsnap = () => {
      return (
            <ScrollWrapper>
                <StoryText>
                <img src='https://images.unsplash.com/photo-1593510649240-9e85e0eb75ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80' alt='photo' />
                </StoryText>
                <StoryText>
                <img src='https://images.unsplash.com/photo-1473040767970-c16f84cc4c05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt='photo' />
                </StoryText>
            </ScrollWrapper>
      )
}

const ScrollWrapper = styled.div `
max-height:100vh;
min-width:100vw;
overflow-y:scroll;
scroll-snap-type:y mandatory;
::-webkit-scrollbar {
    display: none;
}
`
const StoryText = styled.div `
img {
display:flex;
justify-content:center;
align-items:center;
min-width:99vw;
height:100vh;
scroll-snap-align:center;
}

`


export default Scrollsnap;