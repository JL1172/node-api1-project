import styled from "styled-components";

export const StyledSearch = styled.div`
margin-top : 3rem;
width : 20vw;
display : flex;
flex-direction : row-reverse;
justify-content : space-around;
select {
    border : none;
    background-color : rgb(168, 182, 181);
    border : 1px solid rgb(168, 182, 181);
    padding : .2rem;
    padding-left : .3rem;
    color : azure;
}
select:focus {
    outline : none;
    box-shadow : 0 0 1em lightgray;
}
button {
    border : 1px solid azure;
    background-color : rgb(168, 182, 181);;
    transition : .1s ease-in-out;
    border-radius : 5px;
    width : 6vw;
    color : azure;
}
button:active {
    transform : scale(105%);
}
button:hover {
    background-color : white;
    color : rgb(168, 182, 181);
    transition : .1s ease-in-out; 
    outline : 1px solid rgb(168, 182, 181);
    outline-offset : 6px;
}
#closed {
    position : absolute;
    right : 1rem;
    top : 1px;
    cursor: pointer;
}
#alert {
    position : absolute;
    right : 1rem;
    top : 0;
    padding: 2rem;
}
`