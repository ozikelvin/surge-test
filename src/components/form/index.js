import React , { useState } from 'react';
import { FormWrapper , Button } from './form.styled';
import { Container , Form } from 'react-bootstrap';
import { Input } from '../Input/Input';
import '../select/select.css';
  
export const FormFill = () =>{

    const suggestedTime = [
		{ name: 'Nigeria', value: 'Nigeria' },
		{ name: 'Ghana', value: 'Ghana' },
		{ name: 'Spain', value: 'Spain' },
	];

    const [selectedOption, setSelectedOption] = useState('Nigeria');

      const handleChange = (e) => {

        setSelectedOption(e.target.value)
    };
  
    return (

        <>
      
            <FormWrapper>
        
            <Container>
                <h3 className='header' >
                KJK.Africa Tech Talents
                </h3>
                <h6 className='subhead'>
                Apply to join our Ecosystem
                </h6>
            <div className='div' >
            <Form noValidate >
            <div className='row' >
            <div className='col-lg-6 col-12' >
            <Input
            type='text'
            label='First Name'
            name='name'
            style={{background:'#F2F3F4', border:'0'}}
            autoComplete='off'
				/>
            </div>
            <div className='col-lg-6 col-12' >
            <Input
            type='text'
            label='Last Name'
            name='name'
            style={{background:'#F2F3F4', border:'0'}}
            autoComplete='off'
				/>
            </div>
            </div>
            <div className='col-12 my-3' >
            <Input
            type='text'
            label='Email Address'
            name='name'
            style={{background:'#F2F3F4', border:'0'}}
            autoComplete='off'
				/>
            </div>
            <div className='col-12 form-group'>
            <label> City / Country </label>
            <select 
            value={selectedOption}
            onChange={handleChange}
            className='form-control select'
            style={{background:'#F2F3F4', border:'0'}}
            >
            {
                suggestedTime.map(item =>(
                    <option key={item.name} >
                        { item.value }
                    </option>
                ))
            }
            </select>




            </div>
            <div className='col-12'>
            <Input.Password
          label="Password"
          name="password"
          style={{background:'#F2F3F4', border:'0'}}
          autoComplete="off"
         
        />
            </div>
            <div className='d-flex justify-content-center align-items-center my-3' >
            <input type='checkbox' 
          
              /><span className='mx-2 agree' >
            Agree to KJK Africa's Terms and conditions?
            </span>
            </div>
            <div className='d-flex justify-content-center align-items-center my-3'>
            <Button
           data-toggle='modal'
            data-target="#modeee"
             type='button'
               
            >Sign Up</Button>
             
            </div>  
            <div className='d-flex justify-content-center align-items-center my-3'>
            <span className=' agree' >Already have an account ? </span>
            <span className='log mx-2' >LOG IN  </span>
            </div>
            </Form>
            </div>
            </Container>
        </FormWrapper>
        </>
    )
}