import styled from 'styled-components';

export const RootContainer = styled.div`
	justify-content: center;
	position: relative;
	top: -55px;
`;

export const Container = styled.div`
	padding: 10px 20px;
	background-color: ${({theme}) => theme.colors.background.secondary};
	border-radius: 10px;
	align-items: center;
	height: fit-content;
	width: fit-content;
`;

export const LabelTime = styled.p`
	margin-left: 5px;
	font-size: 0.8rem;
	font-weight: bold;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const Icon = styled.img`
	width: 20px;
	height: 20px;
	object-fit: contain;
`;
