import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Password } from './Password';
import { Select } from './Select';


export const Input = ({
	children,
	type,
	label,
	error,
	disabled,
	name,
	value,
	onChange,
	pre,
	placeholder,
	...props
}) => {
	return (
		<Form.Group controlId={name}>
			{label && <Form.Label>{label}</Form.Label>}
			<InputGroup>
				{pre && (
					<InputGroup.Prepend>
						<InputGroup.Text>{pre}</InputGroup.Text>
					</InputGroup.Prepend>
				)}
				<Form.Control
					type={type}
					name={name}
					disabled={disabled}
					placeholder={placeholder}
					defaultValue={value}
					onChange={onChange}
					isInvalid={error}
					autoComplete='off'
					isValid={error}
					{...props}
				/>
				{error && (
					<Form.Control.Feedback>{error}</Form.Control.Feedback>
				)}
			</InputGroup>
		</Form.Group>
	);
};

Input.Password = Password;
Input.Select = Select;
