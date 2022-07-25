import styled from 'styled-components';

export const Container = styled.button`
	padding: 15px 20px;
	border: 1px solid ${({theme}) => theme.colors.main.primary};
	border-radius: 15px;
	background-color: transparent;

	&:hover {
		background-color: ${({theme}) => theme.colors.main.primary};
	}
`;

export const Text = styled.span`
	color: ${({theme}) => theme.colors.text.primary};
`;
