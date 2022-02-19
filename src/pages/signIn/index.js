import React from 'react';
import { SideInfo } from '../../components/sideInfo/index';
import { FormFill } from '../../components/form/index';
import { Modal } from '../../components/modal/Modal';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg'; 
import { ModalWrapper } from './signIn.styled';




export const SignUp = () =>{
     
    return (
        <div>
        <Modal id='modeee' withHeader={false} 
           >
                 <ModalWrapper>
                     <div>
                         <Mail />
                     </div>
                     <div className='my-2' >
            <p className='verify' >Verification Link Sent! </p>
                     </div>
                     <div className='my-2'>
                <p className='message' >
                An email has just been sent to your inbox, kindly check and click the link to proceed with your registration
                 </p>
                     </div>
                     <div className='my-2'>
                         <span 
                         data-dismiss="modal"
                            aria-label="Close"
                          className='button' > 
                         Click to verify email
                         </span>
                     </div>
                 </ModalWrapper>
               </Modal>
     <div className='row' >
     <div className='col-lg-6 col-12'>
     <SideInfo />
     </div>
     <div className='col-lg-6 col-12'>
     <FormFill />
     </div>
     </div>
     </div>
    )
}