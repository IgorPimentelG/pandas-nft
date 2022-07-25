import { Menu } from './Menu';
import { Container } from './styles';
import { Logo, OutlineButton } from '@components/UI';

const Header = () => {

	function connectWallet() {
		// DEV
	}

	return(
		<Container>
			<Logo/>
			<Menu/>
			<OutlineButton
				config={{
					text: 'Connect Wallet',
					handle: connectWallet
				}}
			/>
		</Container>
	);
};

export default Header;
