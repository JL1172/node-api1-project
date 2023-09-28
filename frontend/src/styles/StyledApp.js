import styled from "styled-components";

export const StyledApp = styled.div`
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
position : relative;
#addButton {
    position : absolute;
    left : 1rem;
    top : 1rem;
    z-index : 3;
    color : magenta;
    width : 2rem;
    height : 2rem;
}
`