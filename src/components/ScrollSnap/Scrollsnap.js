import React, {useEffect} from 'react';
import styled from 'styled-components';
// import Footer from './components/Footer/Footer';
<style>@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');</style>;
<style>@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');</style>

const Scrollsnap = () => {
      return (
            <ScrollWrapper>
                <StoryText>
                <h4>Author One Profile</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <h5>Location, Location</h5>
                <img src='https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80' alt='photo' />
                </StoryText>
                <StoryText>
                <h4>Author Two Profile</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <h5>Location, Location</h5>
                <img src='https://images.unsplash.com/photo-1473040767970-c16f84cc4c05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt='photo' />
                </StoryText>
                <StoryText>
                <h4>Author Three Profile</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <h5>Location, Location</h5>
                <img src='https://images.unsplash.com/photo-1585771742132-7d18efffe607?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='photo' />
                </StoryText>
                <StoryText>
                <h4>Author Four Profile</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <h5>Location, Location</h5>
                <img src='https://images.unsplash.com/photo-1587262538177-842ad13e290c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='photo' />
                </StoryText>
                <StoryText>
                <h4>Author Five Profile</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <h5>Location, Location</h5>
                <img src='https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80' alt='photo' />
                </StoryText>
                <StoryText>
                <h4>Author Five Profile</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <h5>Location, Location</h5>
                <img src='https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80' alt='photo' />
                </StoryText>
            </ScrollWrapper>
      )
}

const ScrollWrapper = styled.div `
max-height:100vh;
min-width:100vw;
position:relative;
overflow-y:scroll;
overflow-x:hidden;
scroll-snap-type:y mandatory;
:-webkit-scrollbar {
    display: none;
}
`

const StoryText = styled.div `
img {
min-width:100vw;
height:100vh;
scroll-snap-align:center;
}

h5,h4,p {
    text-align:left;
    position:absolute;
    width:50%;
    margin-bottom:60px;
}

h4 {
    position:absolute;
    font-size:35px;
    margin:50px;

}

p {
    position:absolute;
    text-align:left;
    font-size:20px;
    margin:100px 0 0 50px;
}

h5 {
    position:absolute;
    text-align:left;
    font-size:15px;
    padding-top:2s0px;
    margin:200px 0 0 50px;
}

@media(max-width:800px) {
    h4, p, h5 {
        margin-bottom:200px;
    }
}
`


export default Scrollsnap;