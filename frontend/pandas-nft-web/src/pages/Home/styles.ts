import styled from 'styled-components';

export const RootContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.section`
	display: flex;
	width: 75%;
	flex-direction: column;
	justify-content: center;
`;

export const ContainerLines = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	position: fixed;
	top: -80px;
	bottom: 0;
	z-index: -999;
`;

export const ContainerTitle = styled.div`
	margin: 40px 0;
	justify-content: center;
`;

export const ContainerMain = styled.div`
	justify-content: space-between;
	margin: 50px 0 20px 0;
	width: 100%;
`;

export const ContainerMainLeft = styled.section`
	display: flex;
	flex-direction: column;
	padding: 50px 100px;
	justify-content: flex-start;
`;

export const ContainerMainRight = styled.section``;

export const HeaderSectionArtits = styled.div`
	width: 100%;
	margin: 40px 0;
	align-items: center;
	justify-content: space-between;
`;

export const Cards = styled.div`
	justify-content: space-between;
`;

export const Title = styled.h1`
	font-size: 4rem;
	letter-spacing: 3px;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const Label = styled.p`
	margin: 25px 0;
	line-height: 30px;
	color: ${({theme}) => theme.colors.text.secondary};
`;

export const TitleSection = styled.h1`
	font-size: 2.2rem;
	text-align: center;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const Line = styled.span`
	opacity: 0.4;
	margin: 0 140px;
	border: 1px solid ${({theme}) => theme.colors.background.primary};
`;
