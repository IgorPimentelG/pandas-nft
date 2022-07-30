import styled from 'styled-components';

export const Card = styled.div`
	flex-direction: column;
	border-radius: 20px;
	padding: 10px;
	background-color: ${({theme}) => theme.colors.background.primary};
`;

export const NFTImage = styled.img`
	object-fit: cover;
	border-radius: 15px;
	width: 200px;
	height: 180px;
`;

export const ContainerProfileImage = styled.div`
	width: 100%;
	justify-content: center;
`;

export const ContainerEther = styled.div`
	align-items: center;
	justify-content: center;
	margin: 5px 0;
`;

export const ContainerInfo = styled.div`
	flex-direction: column;
	margin-top: -25px;
`;

export const ProfileImage = styled.img`
	position: relative;
	top: -40px;
	object-fit: cover;
	width: 70px;
	height: 70px;
	border-radius: 100px;
	border: 2px solid #FFF;
`;

export const LabelUsername = styled.h2`
	font-size: 1rem;
	text-align: center;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const LabelPoints = styled.p`
	font-size: 0.8rem;
	font-weight: bold;
	text-align: center;
	margin-left: 3px;
	color: ${({theme}) => theme.colors.text.primary};
`;


