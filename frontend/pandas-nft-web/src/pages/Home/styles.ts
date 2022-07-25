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

export const ContainerTitle = styled.div`
	margin: 40px 0;
	justify-content: center;
`;

export const HeaderSectionArtits = styled.div`
	width: 100%;
	margin: 40px 0;
	align-items: center;
	justify-content: space-between;
`;

export const Cards = styled.div`
	justify-content: space-between;
`;

export const TitleSection = styled.h1`
	font-size: 2.2rem;
	text-align: center;
	color: ${({theme}) => theme.colors.text.primary};
`;
