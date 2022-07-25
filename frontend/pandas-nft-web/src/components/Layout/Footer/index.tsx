import { Logo } from '@components/UI';
import { BsFacebook, BsTwitter,  } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Column, Label, OptionTitle, LabelLink, ContainerInfo, LabelCopyright } from './styles';

const Footer = () => {
	return(
		<Container>
			<ContainerInfo>

				<Column>
					<Logo/>
					<Label>
						<br/>
					The {'world\'s'} first and largest digital marketplace<br/>
					for crypto collectibles and non-fungible tokens<br/>
					(NFTs). Buy, sell, and discover exclusive digital<br/>
					items.
					</Label>
				</Column>

				<Column>
					<OptionTitle>Resources</OptionTitle>
					<LabelLink>Help Center</LabelLink>
					<LabelLink>Platform Status</LabelLink>
					<LabelLink>Partners</LabelLink>
					<LabelLink>Gas-Free Marketplace</LabelLink>
					<LabelLink>Blog</LabelLink>
				</Column>

				<Column>
					<OptionTitle>Company</OptionTitle>
					<LabelLink>Our Team</LabelLink>
					<LabelLink>About Us</LabelLink>
					<LabelLink>Contact Us</LabelLink>
					<LabelLink>Career</LabelLink>
				</Column>

				<Column>
					<OptionTitle>Contact</OptionTitle>
					<Label>
					2715 Ash Dr. San Jose,<br/>
					South Dakota 83475
					</Label>
					<div>
						<Link to='#'>
							<BsFacebook/>
						</Link>

						<Link to='#'>
							<BsTwitter/>
						</Link>

						<Link to='#'>
							<FaInstagramSquare/>
						</Link>
					</div>
				</Column>
			</ContainerInfo>

			<LabelCopyright>
				2022 All Right Reserved
			</LabelCopyright>
		</Container>
	);
};

export { Footer };
