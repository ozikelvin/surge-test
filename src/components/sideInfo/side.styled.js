import styled from 'styled-components/macro';

export const HeadWrapper = styled.div`
color:#fff;
margin:20px;

h2 {

width:100%;
font-family: Biotif;
font-style: normal;
font-weight: bold;
line-height: 56px;
font-size:2.2rem;
text-align: justify;
font-feature-settings: 'salt' on, 'liga' off;
}

@media (max-width: 700px) {
  
    h2 {
margin-left:-1.4rem;
width:100%;
font-family: Biotif;
font-style: normal;
font-weight: bold;
line-height: 30px;
font-size:1.5rem;
text-align: justify;
font-feature-settings: 'salt' on, 'liga' off;
} 
}

`

export const SideBody = styled.div`
width:50vw;
height:110vh;
background:#233E8B;
padding:20px;


.top {
margin:20px;
color:#fff;
font-family: Raleway;
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 37px;
}

@media (max-width: 700px) {
    width:100%;
    height:100%;
    padding:20px; 

    .top {
     margin-left:-1rem; 
    }
  
}

`
export const ContentWrapper = styled.div`
color:#fff;

p {

font-size:1rem;
margin:15px;
font-family: Biotif;
font-style: normal;
font-weight: 450;
line-height: 150%;
/* or 24px */

text-align: justify;
}

.subhead {
font-family: Biotif;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 150%; 
color:#fff;  
}

.subWrap {
    
}

li {
font-family: Biotif;
font-style: normal;
font-weight: 450;
font-size: 16px;
line-height: 150%;
color: #FFFFFF;
list-style:none;
}

@media (max-width: 700px) {
    
    margin-left:-1rem; 
   
  
}

`