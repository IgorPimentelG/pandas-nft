import { FC } from 'react';
import { Container, Text } from './styles';
import { IButton } from '@shared/model/interfaces/button';

const OutlineButton: FC<{ config: IButton }> = ({ config }) => {

	const { text, handle } = config;

	return(
		<Container onClick={handle}>
			<Text>{text}</Text>
		</Container>
	);
};

export { OutlineButton };
