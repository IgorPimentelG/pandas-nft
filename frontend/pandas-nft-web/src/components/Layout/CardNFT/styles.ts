import styled from 'styled-components';

export const Card = styled.div`
	flex-direction: column;
	max-width: fit-content;
	border-radius: 20px;
	padding: 15px 15px 5px 15px;
	background-color: ${({theme}) => theme.colors.background.primary};
`;

export const Header = styled.div`
	position: relative;
	top: -20px;
	align-items: center;
	justify-content: space-between;
`;

export const ContainerInfo = styled.div`
	position: relative;
	top: -10px;
	align-items: center;
	justify-content: space-between;
`;

export const ContainerInfoUser = styled.div`
	align-items: center;
`;

export const InfoUser = styled.div`
	flex-direction: column;
	margin-left: 10px;
`;

export const InfoPrice = styled.div`
	flex-direction: column;
`;

export const NFT = styled.img`
	height: 280px;
	width: 250px;
	object-fit: cover;
	border-radius: 20px;
`;

export const UserImage = styled.img`
	width: 45px;
	height: 45px;
	object-fit: cover;
	border-radius: 15px;
`;

export const Label = styled.p`
	font-size: 0.8rem;
	margin-bottom: 5px;
	color: ${({theme}) => theme.colors.text.secondary};
`;

export const Text = styled.p`
	font-size: 0.9rem;
	font-weight: bold;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const Network = styled.p`
	padding: 5px 15px;
	font-size: 0.8rem;
	font-weight: bold;
	letter-spacing: 2px;
	border-radius: 10px;
	text-transform: uppercase;
	${({theme}) => `
		background-color: ${theme.colors.main.primary};
		color: ${theme.colors.text.primary};
	`};
`;
