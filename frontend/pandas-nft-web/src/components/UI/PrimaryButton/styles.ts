import styled from 'styled-components';

export const Container = styled.button`
	padding: 15px 30px;
	border-radius: 15px;
	width: fit-content;
	background-color: ${({theme}) => theme.colors.main.primary};
`;

export const Text = styled.span`
	color: ${({theme}) => theme.colors.text.primary};
`;
