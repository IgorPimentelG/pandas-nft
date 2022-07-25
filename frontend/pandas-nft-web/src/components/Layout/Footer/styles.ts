import styled from 'styled-components';

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	position: relative;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 50px;
	background: linear-gradient(
		90deg,
		rgba(30, 80, 255, 0.09),
		rgba(0, 0, 0, 0.1),
		rgba(0, 0, 0, 0.1),
		rgba(0, 0, 0, 0.1)
	);
`;

export const ContainerInfo = styled.section`
	display: flex;
	justify-content: space-around;
	width: 100%;
`;

export const Column = styled.div`
	flex-direction: column;
	justify-content: flex-start;
`;

export const Label = styled.p`
	font-size: 0.8rem;
	color: ${({theme}) => theme.colors.text.secondary};
	line-height: 23px;
`;

export const OptionTitle = styled.h4`
	font-size: 1.2rem;
	margin-bottom: 15px;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const LabelLink = styled.span`
	cursor: pointer;
	margin: 10px 0;
	color: ${({theme}) => theme.colors.text.secondary};

	&:hover {
		color: #85C7A2;
	}
`;

export const LabelCopyright = styled.p`
	margin-left: 7%;
	margin-top: 30px;
	font-size: 0.8rem;
	color: ${({theme}) => theme.colors.text.primary};
`;


