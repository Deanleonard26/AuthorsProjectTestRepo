import React from 'react';
import styled from 'styled-components'

export default function Form() {
    return (
        <DivWrapper>
            <FormWrapper>
                <TextSection>
                <h2>TELL YOUR STORY</h2>
                </TextSection>
                <FNameSection>
                <label>First Name</label>
                <input/>
                </FNameSection>

                <LNameSection>
                <label>Last Name</label>
                <input/>
                </LNameSection>

                <EmailSection>
                <label>Email</label>
                <input/>

                </EmailSection>

                <TopicSection>
                <label>Topic</label>
                <input/>
                </TopicSection>

                <MessageSection>
                <label>Tell your Story</label>
                <BoxButton>
                <textarea/>
                <button>Submit</button>
                </BoxButton>
                </MessageSection>
                
            </FormWrapper>
            <TextWrapper>
            <h4>Why Share?</h4>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            </TextWrapper>
        </DivWrapper>
    )
}

const DivWrapper = styled.div`
width:100%;
display:flex;
flex-direction:row;
text-align:right;
align-items:right;
justify-content:left;
flex-wrap:wrap;
`

const FormWrapper = styled.div`
width:60%;
display:flex;
flex-direction:column;
text-align:center;
align-items:center;
justify-content:center;
`

const TextSection = styled.div`
width:40%;
display:block;
text-align:left;
margin:20px 0 20px 0px;

h2 {
    font-size:25px;
    font-weight:400;
}

`

const FNameSection = styled.div`
display:flex;
flex-direction:row;
width:70%;

label {
    width:20%;
    text-align:right;
    margin-right:15px;
}

input {
    width:90%;
    height:30px;
    margin-bottom:30px;
    border-radius:5px;
    border: 1px solid black;
}
`

const LNameSection = styled.div`
display:flex;
flex-direction:row;
width:70%;

label {
    width:20%;
    text-align:right;
    margin-right:15px;
    
}

input {
    width:90%;
    height:30px;
    margin-bottom:30px;
    border-radius:5px;
    border: 1px solid black;
    
}
`

const EmailSection = styled.div`
display:flex;
flex-direction:row;
width:70%;

label {
    width:20%;
    text-align:right;
    margin-right:15px;
}

input {
    width:90%;
    height:30px;
    margin-bottom:30px;
    border-radius:5px;
    border: 1px solid black;
}
`

const TopicSection = styled.div`
display:flex;
flex-direction:row;
width:70%;

label {
    width:20%;
    text-align:right;
    margin-right:15px;
}

input {
    width:90%;
    height:30px;
    margin-bottom:30px;
    border-radius:5px;
    border: 1px solid black;
}
`

const MessageSection = styled.div`
display:flex;
flex-direction:row;
width:70%;

label {
    width:20%;
    text-align:right;
    margin-right:15px;
}

`

const BoxButton = styled.div`
display:flex;
flex-direction:column;
width:90%;

textarea {
    width:100%;
    height:150px;
    margin-bottom:30px;
    border-radius:5px;
    border: 1px solid black;
}

button{
    width:30%;
    height:35px;
    border-radius:5px;
    background-color:white;
    border:1px solid black;
    font-size:20px;

}
`

const TextWrapper = styled.div`
width:400px;
height:auto;
text-align:left;
font-size:15px;
font-weight:300;
line-height:1.5em;
margin-top:50px;

p {
    margin-bottom:50px 0;
}

h4 {
    margin:50px 0 0 0 ;
}
`
