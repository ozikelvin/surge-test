import React from 'react';
import Form from 'react-bootstrap/Form';

export const TextArea = ({
	children,
	rows,
	label,
	error,
	disabled,
	name,
	value,
	onChange,
	placeholder,
	...props
}) => {
	return (
		<Form.Group controlId={name}>
			{label && <Form.Label>{label}</Form.Label>}
			<Form.Control
				as='textarea'
				rows={rows || 4}
				name={name}
				disabled={disabled}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				isInvalid={error}
				autoComplete='off'
				isValid={error}
				{...props}
			/>
			{error && <Form.Control.Feedback>{error}</Form.Control.Feedback>}
		</Form.Group>
	);
};
