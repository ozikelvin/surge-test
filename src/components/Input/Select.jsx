import React, { useState } from 'react';
import './select.css';
import Form from 'react-bootstrap/Form';
import SelectSearch from 'react-select-search';

export const Select = ({
	label,
	value,
	onChange,
	name,
	disabled,
	error,
	multiple = false,
	search = false,
	placeholder,
	options,
	...props
}) => {
	const [selected, setSelected] = useState(value);
	const selectItem = (index) => {
		setSelected(index);
		onChange({
			target: {
				value: index,
				name,
			},
		});
	};
	return (
		<Form.Group controlId={name}>
			{label && <Form.Label>{label}</Form.Label>}

			<SelectSearch
				className='input__select'
				name={name}
				placeholder={placeholder}
				value={selected}
				onChange={selectItem}
				disabled={disabled}
				search={search}
				multiple={multiple}
				printOptions='on-focus'
				closeOnSelect={!multiple}
				options={options}
				{...props}
			/>
			{error && <div className='select__error'>{error}</div>}
		</Form.Group>
	);
};
