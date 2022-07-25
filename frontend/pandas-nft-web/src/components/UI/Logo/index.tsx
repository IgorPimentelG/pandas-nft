import { Logo as Icon } from '@assets/images';
import { Container, Image, Label } from './styles';

const Logo = () => {
	return(
		<Container>
			<Image
				alt='Logo pandas NFT'
				src={Icon}
			/>
			<Label>Pandas NFT</Label>
		</Container>
	);
};

export { Logo };
