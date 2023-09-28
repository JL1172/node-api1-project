import styled, { keyframes } from "styled-components";


const kf = keyframes`
0% {
   transform : translate(0rem,0rem);
}
25% {
    transform : translate(10rem,6rem);
}
50% {
    transform : translate(-.1rem,4rem);
}
75% {
    transform : translateX(20rem);
}
`
const kf2 = keyframes`
0% {
   transform : translate(0rem,0rem);
}
25% {
    transform : translate(-10rem,6rem);
}
50% {
    transform : translate(.1rem,4rem);
}
75% {
    transform : translateX(-20rem);
}
`
const kf3 = keyframes`
0% {
   transform : translate(2rem,2rem);
}
25% {
    transform : translate(10rem,90vh) rotate(-90deg);
}
50% {
    transform : translate(.1rem,4rem) rotate(-350deg);
}
75% {
    transform : translate(50rem,90vh);
}
90% {
    transform :translateX(10rem) rotate(360deg);
}
100% {
    transform : translate(0rem,0rem); 
}

`
export const StyledForm = styled.div`
margin-top : 5rem;
height : 110vh;
padding-top : 2rem;
max-height : fit-content;
width : 100%;
display : flex;
justify-content : center;
flex-direction : column;
align-items : center;
background-color :whitesmoke;
position : relative;
    .row {
        display : flex;
        flex-direction : column;
        width : 15vw;
        justify-content : space-evenly;
    }
    #submit {
    border : 1px solid azure;
    width : 100% !important;
    background-color : transparent;
    transition : .1s ease-in-out;
    border-radius : 5px;
    width : 6vw;
    color : azure;
}
#submit:active {
    transform : scale(105%);
}
#submit:hover {
    background-color : white;
    color : rgb(168, 182, 181);
    transition : .1s ease-in-out; 
    outline : 1px solid azure;
    outline-offset : 6px;
}
input {
    margin-left : 1rem;
    background-color : transparent;
    border : none;
    color : azure;
    border-bottom : 1px solid azure;
    &:focus {
        outline : none;
        color : purple;
    }
} 
#main{
    margin : 1.5rem;
    height : 100rem;
    width : 50%;
    display : flex;
    justify-content : space-evenly;
    flex-direction : column;
    align-items : center;
    color : azure;
    font-size : 20px;
    background-color : rgb(168, 182, 181);
    position : relative;
    transition : .1s ease-in-out;
    z-index : 2;
    &:hover {
        transform : scale(100.5%);
        transition : .1s ease-in-out;
        box-shadow : 0 0 1em lightgray;
    }
    .contents {
        color : rgb(39, 39, 39);
    }
.movingGeo3 {
    position : absolute;
    transform-origin : left;
    border : 2px solid rgb(170, 160, 181);
    width : 4rem;
    height : 4rem;
    z-index : 4;
    animation : ${kf3} 20s infinite linear;
}
#form {
    display : flex;
    flex-direction : column;
    height : 60vh;
    justify-content : space-evenly;
}
}
` 