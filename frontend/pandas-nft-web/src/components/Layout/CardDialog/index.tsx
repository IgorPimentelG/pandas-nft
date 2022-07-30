import { FC } from 'react';
import { ICardDialog } from '@shared/model/interfaces/layout';
import { Card, Title, Text } from './styles';
import { PrimaryButton } from '@components/UI';

const CardDialog: FC<{ data: ICardDialog }> = ({ data }) => {

	const { title, text, configButton } = data;

	return (
		<Card>
			<Title>{title}</Title>
			<Text>{text}</Text>
			<PrimaryButton config={configButton}/>
		</Card>
	);
};

export { CardDialog };
