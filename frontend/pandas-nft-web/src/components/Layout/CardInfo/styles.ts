import styled from 'styled-components';

interface CardProps {
	index: number;
}

export const Card = styled.div<CardProps>`
	border-radius: 20px;
	margin: 0 20px;
	${({index}) => index === 1 && `
		background-image: radial-gradient(circle, #ffffff, #d5d5d5, #adadad, #878787, #626262);
	`}
`;

export const Container = styled.div`
	flex-direction: column;
	margin: 1px;
	padding: 40px 20px;
	border-radius: 20px;
	align-items: center;
	width: 230px;
	background-color: ${({theme}) => theme.colors.background.primary};
`;

export const Title = styled.h1`
	margin: 20px 0;
	text-transform: capitalize;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const Text = styled.p`
	line-height: 20px;
	font-size: 0.8rem;
	text-align: center;
	color: ${({theme}) => theme.colors.text.secondary};
`;

export const Icon = styled.img`
	object-fit: contain;
	width: 55px;
	height: 55px;
	margin-bottom: 15px;
`;
