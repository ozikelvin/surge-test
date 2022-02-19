
import {ContentWrapper , HeadWrapper, SideBody } from './side.styled';
import { Container } from 'react-bootstrap';


export const SideInfo = () =>{

    return (

    <SideBody>
                <Container>
                <p className='top' >Surge</p>
            <HeadWrapper>
                <h2>
            Let us build Africa's next biggest products together
                </h2>
            </HeadWrapper>
            <ContentWrapper>
            <p>
            Our talents at KJK build solutions for the world's most respectable technology-driven companies. By joining our network, you are up for a challenging work that will occupy your mind and a community of top-fields techies that will offer you opportunities for continuous growth
            </p>
            <div className='subWrap' >
            <p className='subhead' >
             Upon your form submission
             </p>
                <div className='mx-3' >
                <li>
             - A short English proficiency test (10 mins)
             </li>
             <li>
             - A coding challenge (1 hour)
             </li>
             <li>
             - A live technical interview with our experts (1 hour)
             </li>
                </div>
            </div>
            </ContentWrapper>
                </Container>
        </SideBody>
     
    )
}

