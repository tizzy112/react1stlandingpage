import styled from "styled-components";
export const NavbarStyle = styled.div`
padding: 12px 48px;
border-bottom: 1px solid #e0e0e0;

background-color: #22372b;

.logoContainer{
gap: 8px
color: white
}

.navLinkContainer{
gap 16px;
}

.navLinks{
ul{
display:flex;
gap:16px;
list-style:none;

li{
color: white;
cursor:pointer;
}
}
}


.buttonContainer{
gap: 16px;
padding:5px;

button{
padding: 8px 16px;
border:none;
border-radius:200px;
cursor:pointer;
height:40px;
}

.loginBtn{
border:1px solid green;
color:green;
background-color: #fff;
}

.signUpBtn{
border: 1px solid #068353;
color:white;
background: green;
}

}
`


;