import React , {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {

  const [burgerStatus, setBurgerStatus] =  useState(false);
  return (
    <Container>
      <div>
        <img src="/images/logo.svg" alt=" " />
      </div>
      <Menu>
        <p>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick = { () => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav  show = {burgerStatus}>
        <Closer>
        <CustomClose onClick = { () => setBurgerStatus(false)}>

        </CustomClose>
        </Closer>
        <li><a>existing Inventory</a> </li>
        <li><a>Used inventory</a> </li>
        <li><a>trade-in</a> </li>
        <li><a>cybertruck</a> </li>
        <li><a>Used inventory</a> </li>
        <li><a>Used inventory</a> </li>
        <li><a>Used inventory</a> </li>


      </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
min-height : 60px;
position : fixed;
display : flex;
align-items : center;
justify-content : space-between;
padding : 0 20px;
top : 0;
left : 0;
right : 0;
z-index : 1;


`
const Menu = styled.div`
display : flex;
align-items : center;
justify-content : center;
flex : 1;
p{
    font-weight : 600;
    text-transform : uppercase;
 
    padding : 0 10px;
    flex-wrap : nowrap;
    
  }

  a{
    padding : 0 25px;
    text-decoration : none;
  }

  @media(max-width : 768px){
    display : none;
  }

`
const RightMenu = styled.div`

display : flex;
align-items : center;
a{
  padding : 0 10px;
  text-decoration : none;
  text-transform : uppercase;
  font-weight: 600;
}

`
const CustomMenu = styled(MenuIcon)`
`
const BurgerNav = styled.div`

position : fixed;
top : 0;
bottom : 0;
right: 0;
background : white;
width : 300px;
z-index : 100;
list-style : none;
padding : 20px;
display : flex;
flex-direction: column;
text-decoration : none;
text-align : start;

transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition : transform 0.2s ease-in;
li {
  padding : 15px 0;
  border-bottom : 1px solid rgba(0, 0, 0, 0.2);
}

a{
  font-weight : 600;
  
}

`

const CustomClose = styled(CloseIcon)``

const Closer = styled.div`
display : flex;
justify-content : flex-end;

`