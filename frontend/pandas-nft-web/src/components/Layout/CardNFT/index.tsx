import { Countdown } from '../Countdown';
import { FC } from 'react';
import { Token } from '@shared/model/types/token';
import {
	Card,
	ContainerInfo,
	ContainerInfoUser,
	Header,
	InfoPrice,
	InfoUser,
	Label,
	NFT,
	Text,
	Network,
	UserImage
} from './styles';

const CardNFT: FC<{ token: Token }> = ({ token }) => {

	const { image, expiresIn, name, creator, price } = token;

	return(
		<Card>
			<NFT src={image}/>
			<Countdown expiresIn={expiresIn}/>

			<Header>
				<Text>{name}</Text>
				<Network>bsc</Network>
			</Header>

			<ContainerInfo>
				<ContainerInfoUser>
					<UserImage src={creator.image}/>
					<InfoUser>
						<Label>Creator</Label>
						<Text>{creator.name}</Text>
					</InfoUser>
				</ContainerInfoUser>

				<InfoPrice>
					<Label>Current Bid</Label>
					<Text>{price} ETH</Text>
				</InfoPrice>
			</ContainerInfo>
		</Card>
	);
};

export { CardNFT };
