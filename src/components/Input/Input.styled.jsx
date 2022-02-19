import tw from 'styled-components/macro';
import styled from 'styled-components/macro';

export const InputWrapper = styled.div`
	padding-bottom: 8px;
	margin-bottom: 5px;
`;

export const Label = styled.label`
	margin-bottom: 4px;
	${(p) => (p.error ? 'text-error' : 'text-black-300')}
	display: inline-block;
`;

export const LabelHint = tw.span`
    text-tiny
    text-black-200
`;

export const InputElement = tw.input`
   focus:outline-none

   bg:secondary
   disabled:bg-opacity-10
   ${(p) => (p.error ? 'ring-error' : 'ring-gray-300')}
   ${(p) => (p.error ? 'border-error' : 'border-gray-300')}
   rounded-md
   w-full
   transition-shadow
   ${(p) => (p.error ? 'bg-error' : 'bg-gray-100')}
   ${(p) => (p.error ? 'bg-opacity-10' : '')}
   py-2.5
   px-3
`;

export const PasswordElement = tw(InputElement)`
    pr-8
`;

export const PasswordEye = styled.span`
	cursor: pointer;
	svg {
		path {
			fill: ${(props) => (props.visible ? '#646464' : '#B2BBBF')};
		}
	}
`;

export const Validation = tw.span`
    block
    px-0
    flex
    items-center
    pt-1
    font-thin
    text-tiny
    text-error
    pb-0
`;

export const SelectStyled = tw.input`
    appearance-none
    focus:outline-none
    focus:ring-1
    border
    focus:border-transparent
    ${(p) => (p.error ? 'ring-error' : 'ring-gray-300')}
    ${(p) => (p.error ? 'border-error' : 'border-gray-300')}
    rounded-md
    w-full
    transition-shadow
    ${(p) => (p.error ? 'bg-error' : 'bg-gray-100')}
    ${(p) => (p.error ? 'bg-opacity-10' : '')}
    py-2.5
    px-3
`;

export const SelectWrapper = tw.div`
    relative
    py-2.5
`;

export const DropdownStyled = tw.div`
    mt-1
    flex
    flex-col
    absolute
    w-full
    px-0
    bg-white
    rounded-b-lg
    shadow-lg
    z-30
    h-40
    overflow-hidden
    scroll-y
    overflow-y-scroll

`;

export const MenuItem = tw.span`
    py-3
    px-5
    hover:bg-gray-100
    cursor-pointer
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	// Hide checkbox visually but remain accessible to screen readers.
	// Source: https://polished.js.org/docs/#hidevisually
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	display: none;
	white-space: nowrap;
	width: 1px;
`;

export const CheckboxContainer = styled.div`
	display: inline-block;
	/* vertical-align: middle; */
	cursor: pointer;
	user-select: none;
`;

export const CheckBoxIcon = styled.svg`
	fill: none;
	stroke: #ABABAB;
	stroke-width: 2px;
`;

export const StyledCheckbox = styled.div`
	display: inline-block;
	width: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 16px;
	padding: 1px;
	border: 1px solid #ABABAB;
	background: #fff;
	border-radius: 3px;
	transition: all 150ms;

	${CheckBoxIcon} {
		visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
	}
`;
