import styled from 'styled-components';

export const Card = styled.div`
	flex-direction: column;
	width: 60%;
	align-items: center;
	justify-items: center;
	margin: 100px 0;
	padding: 30px;
	border-radius: 15px;
	background: linear-gradient(90deg, rgba(49, 51, 59, 0.5), rgba(0, 0, 0, 0.1));
`;

export const Title = styled.h1`
	margin-bottom: 20px;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const Text = styled.p`
	font-size: 0.8rem;
	line-height: 25px;
	margin-bottom: 20px;
	width: 70%;
	text-align: center;
	color: ${({theme}) => theme.colors.text.primary};
`;
