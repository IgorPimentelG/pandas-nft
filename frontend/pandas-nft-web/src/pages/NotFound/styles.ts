import styled from 'styled-components';

export const RootContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	background: linear-gradient(
		140deg,
		rgba(9,22,69, 1),
		rgba(255,255,255,0) 30%,
		rgba(255,255,255,0) 70%,
		rgba(9,22,69, 1)
	);
`;

export const Image = styled.img`
	object-fit: contain;
	height: 50%;
	width: 50%;
`;

export const Label = styled.h1`
	font-size: 1.5rem;
	margin-bottom: 20px;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const Logo = styled.img`
	object-fit: contain;
	height: 50px;
	width: 50px;
`;
