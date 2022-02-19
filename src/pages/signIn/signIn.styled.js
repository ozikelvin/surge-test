import styled from 'styled-components/macro';

export const ModalWrapper = styled.div`

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:25px;

.verify {
font-family: Biotif;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 48px;
color: #33220A;
}

.message {
font-family: Biotif;
font-style: normal;
font-weight: 450;
font-size: 24px;
line-height: 31px;
text-align: center;

color: rgba(51, 34, 10, 0.9);
}

.button {

 display: flex;
flex-direction: row;
align-items: flex-start;
padding: 14px 57px;
background: #233E8B;
border-radius: 10px;
color:#fff;
}


`