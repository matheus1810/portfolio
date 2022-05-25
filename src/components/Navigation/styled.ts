import styled from "styled-components"

export const Container = styled.div`
.navigation {
  position: fixed;
  left: 20px;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  gap:40px;
  border-radius: 50px;
  width:80px;
  height:65vh;
  background-color:#5F1A37;


}
.icon{
    font-size:2em;
    color:#9DD9D2;
}
.icon:hover{
    border-bottom:2px solid  ;
}
@media (max-width: 950px) {
.navigation {
   position: static;
   margin:86vh auto 0px auto;
   display: flex;
   flex-direction: row;
   justify-content: center; 
   align-items: center;
   gap:4vw;
   border-radius: 50px;
   width:400px;
   height:10vh;
 }
}
@media (max-width: 400px) {
.navigation {
   margin:90vh auto 0px auto;
   gap:7vw;
   border-radius:0px;
   width:100vw;
 }
}

`








