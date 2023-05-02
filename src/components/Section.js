import React from 'react'
import styled from "styled-components"
// import Fade from 'react-reveal/Fade'

function Section({ title, description, leftButton, rightButton, backgroundImage }) {
    console.log(title);
    return (
        <Wrap bgImage={backgroundImage}>
           
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
          
            <Buttons>
                {/* <Fade bottom> */}
                    <ButtonGroup>
                        <LeftButton>
                            {leftButton}
                        </LeftButton>
                        {rightButton &&
                            <RightButton>
                                {rightButton}
                            </RightButton>
                        }
                    </ButtonGroup>
                {/* </Fade> */}
                <DownArrow src="images/down-arrow.svg">

                </DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
z-index:-1;
width : 100vw;
height : 100vh;
background-size : cover;
background-position : center;
background-repeat : no-repeat;
background-image : url('/images/model-s.jpg');
display : flex;
flex-direction : column;
justify-content : space-between;
align-items :center;
background-image : ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align : center;

`

const ButtonGroup = styled.div`
display: flex;

margin : 0 30px 0;
overflow-y : hidden;
@media (max-width : 768px){
    flex-direction : column;
}
`

const LeftButton = styled.div`
background-color : rgba(23,26,32,0.8);
height : 40px;
width : 256px;
color : white;
display : flex;
justify-content : center;
align-items : center;
border-radius : 100px;
opacity : 0.85;
text-transform : uppercase;
font-size : 12px;
cursor : pointer;
margin : 8px;

`
const RightButton = styled(LeftButton)`
background : white;
opacity : 0.65;
color : black;
`
const DownArrow = styled.img`
margin-top : 20px;
height : 40px;
overflow-x : hidden;
animation : animateDown infinite 1.5s;

`
const Buttons = styled.div`
overflow-y : hidden;
`