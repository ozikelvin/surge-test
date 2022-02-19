import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


export const Password = ({
	name,
	onChange,
	children,
	disabled,
	error,
	value,
	label,
	placeholder,
	...props
}) => {
	const [visible, setVisible] = useState(false);
	return (
		<Form.Group controlId={name}>
			{label && <Form.Label>{label}</Form.Label>}
			<div className='position-relative'>
				<Form.Control
					type={visible ? 'text' : 'password'}
					name={name}
					disabled={disabled}
					placeholder={placeholder}
					value={value}
					className='pr-5'
					onChange={onChange}
					isInvalid={error}
					autoComplete='off'
					isValid={error}
					{...props}
				/>
				{error && (
					<Form.Control.Feedback>{error}</Form.Control.Feedback>
				)}
				
			</div>
		</Form.Group>
	);
};
