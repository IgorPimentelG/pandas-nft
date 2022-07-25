import { FC } from 'react';
import { Container, Text } from './styles';
import { IButton } from '@shared/model/interfaces/button';

const PrimaryButton: FC<{ config: IButton }> = ({ config }) => {

	const { text, handle } = config;

	return(
		<Container onClick={handle}>
			<Text>{text}</Text>
		</Container>
	);
};

export { PrimaryButton };
