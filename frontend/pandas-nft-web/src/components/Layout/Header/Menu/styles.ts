import styled, { keyframes } from 'styled-components';
import { LabelProps } from './props';

const animationLine = keyframes`
	from {
		width: 0%;
	}

	to {
		width: 50%;
	}
`;

export const Container = styled.nav`
	display: flex;
	margin-top: 5px;
`;

export const Label = styled.span<LabelProps>`
	margin: 0 15px;
	font-weight: bold;
	text-transform: capitalize;
	color: ${({isActive, theme}) => isActive ? theme.colors.text.primary : theme.colors.text.secondary};
`;

export const Line = styled.div`
	margin-top: 8px;
	margin-left: 10px;
	border-radius: 50px;
	border: 1px solid ${({theme}) => theme.colors.main.primary};
	animation: ${animationLine} 0.5s both;
`;
