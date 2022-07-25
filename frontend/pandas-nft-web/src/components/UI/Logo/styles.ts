import styled from 'styled-components';

export const Container = styled.div`
	align-items: center;
`;

export const Label = styled.h1`
	margin-left: 10px;
	font-size: 1rem;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const Image = styled.img`
	object-fit: contain;
	width: 35px;
	height: 35px;
`;
