import React from 'react';
import styled from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
</style>

const Instagram = () => {
      return (
            <InstaWrapper>
            <InstaText>
            <InstaContact><h4>#AuthorsWeekly</h4><p>@Authors</p></InstaContact>
            <Follow>
                <button>Follow</button>
            </Follow>
            </InstaText>
                <InstaImgLinks1>
                    <img src='https://images.unsplash.com/photo-1610824771380-390c72f79f11?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' />
                    <ImgWrapper><img src='https://images.unsplash.com/photo-1610948237307-bbebf8da8a8d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' /></ImgWrapper>
                    <ImgWrapper><img src='https://images.unsplash.com/photo-1610935591850-9a3bf14810c0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' /></ImgWrapper>
                    <ImgWrapper1><img src='https://images.unsplash.com/photo-1610824771380-390c72f79f11?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' /></ImgWrapper1>
                    </InstaImgLinks1>
                    {/* <InstaImgLinks2>
                    <img src='https://images.unsplash.com/photo-1610869504857-e425fc2093ab?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' />
                    <img src='https://images.unsplash.com/photo-1610916975200-6d28742d4dd6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' />
                    <img src='https://images.unsplash.com/photo-1610831655344-d2ab131b614f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' />
                    <img src='https://images.unsplash.com/photo-1610801264293-588a3b6c3446?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' atl='portrait' />
                
                </InstaImgLinks2> */}
            </InstaWrapper>
      )
}

const InstaWrapper = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
text-align:center;
align-items:center;
font-family: 'Space Mono', monospace;
width:100%;
margin:0;
margin-bottom:100px;
`

const InstaImgLinks1 = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
margin:0;
width:auto;
width:100%;

/* @media (max-width:650px) {
    overflow-x:scroll;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    scroll-snap-type:x mandatory;
} */

img {
    width:300px;
    height:380px;
    margin:10px;
}
`

const ImgWrapper= styled.div `
@media (max-width:650px) {
display:none;
width:100%;
}
`

const ImgWrapper1 = styled.div `
    @media (min-width:960px) AND (max-width:1300px){
        display:none;
    }
    @media (max-width:650px) {
    display:none;
    }
`
    

/* // const InstaImgLinks2 = styled.div`
// display:flex;
// flex-direction:row;
// justify-content:center;
// margin:0;

// img {
//     width:280px;
//     height:300px;
// }
// ` */

const InstaText = styled.div `
display:flex;
flex-direction:row;
justify-content:center;
margin-bottom:30px;
width:100%;
`

const InstaContact = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:left;
    text-align:left;

    h4 {
        margin:0;
    }
    p{ 
        margin:5px;
        margin-left:0;
    }

`

const Follow = styled.div `
button {
    width:130px;
    height:40px;
    border-radius:2px;
    margin-left:50px;
    border:1px solid black;
    background-color:white;
    cursor: pointer;
    outline:none;

    @media(max-width:450px){
        margin-left:30px;
    }
}

button:hover {
    background-color:lightgray;
    border:0;
    cursor: pointer;
}

button:active {
    background-color:black;
    color:white;
}


`

export default Instagram;