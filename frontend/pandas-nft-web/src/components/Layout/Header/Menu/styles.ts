import styled from 'styled-components';

interface LabelProps {
	isActive: boolean;
}

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
	width: 50%;
	margin-top: 8px;
	margin-left: 10px;
	border-radius: 50px;
	border: 1px solid ${({theme}) => theme.colors.main.primary};
`;
