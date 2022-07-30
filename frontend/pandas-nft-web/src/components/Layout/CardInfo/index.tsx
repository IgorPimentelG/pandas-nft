import { FC } from 'react';
import { CircleIcon } from '@assets/images';
import { Card, Icon, Title, Text, Container } from './styles';
import { ICardInfo } from '@shared/model/interfaces/layout';

const CardInfo: FC<{ data: ICardInfo }> = ({ data }) => {

	const { title, text, index } = data;

	return(
		<Card index={index}>
			<Container>
				<Icon src={CircleIcon}/>
				<Title>{title}</Title>
				<Text>{text}</Text>
			</Container>
		</Card>
	);
};

export { CardInfo };
