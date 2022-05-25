
import styled from "styled-components"

export const Container = styled.div`
position:absolute;
top:0;
width:100vw;
`
export const TxtContainer=styled.div`
display:flex ;
align-items:center ;
font-size:2.8em;
margin:20px auto 0px auto  ;
justify-content:center;
span{
    color:#515052;
}
`
export const Intro=styled.div`
div{
     margin: 0 auto ;
}
width:80vw;
margin:30px auto 0px auto;
display:flex;
margin-top:80px;
@media (max-width: 900px) {
    flex-wrap:wrap;
}
`
export const ImgContainer=styled.div`
width:250px;
height:350px;
margin:0 0 0 auto;
img{
    border-radius:10px;
    min-width:100% ;
    height:100%;
    border-bottom:2px solid black;
}
`
export const ButtonsContainer=styled.div`
display:flex;
justify-content:center;
margin:0 auto;
button{ 
    padding:10px;
    border-radius:10px;
    font-size:1.2em;
}
.btn1{
   background:#FFF8F0;
   border:2px solid #5F1A37;
}
.btn2{
    color:white;
   background:#5F1A37;
   border:none;
   margin-left:20px;
  
}

`
export const Text =styled.div`
line-height:1.3em;
font-size:1.6em ;
width:75%;
margin:auto ;
 width:400px
`