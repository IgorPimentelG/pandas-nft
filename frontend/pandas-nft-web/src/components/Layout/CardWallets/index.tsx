import { Container, Icon, RootContainer } from './styles';
import {
	Coinbase,
	Metamask,
	TrustWallet,
	Binance,
	Tokocrypto
} from '@assets/images';

const CardWallets = () => {
	return(
		<RootContainer>
			<Container>
				<Icon src={Binance}/>
				<Icon src={TrustWallet}/>
				<Icon src={Metamask}/>
				<Icon src={Coinbase}/>
				<Icon src={Tokocrypto}/>
			</Container>
		</RootContainer>
	);
};

export { CardWallets };
