/* eslint-disable @typescript-eslint/no-empty-function */
import { CardArtist, CardDialog, CardNFT, CardWallets, Page } from '@components/Layout';
import { CardInfo } from '@components/Layout/CardInfo';
import { OutlineButton, PrimaryButton } from '@components/UI';
import { Cards, Container, ContainerLines, ContainerMain, ContainerMainLeft, ContainerMainRight, ContainerTitle, HeaderSectionArtits, Label, Line, RootContainer, Title, TitleSection } from './styles';

const HomePage = () => {

	const infoData = [
		{
			title: 'set up your wallet',
			text: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.'
		},
		{
			title: 'add your NFTs',
			text: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.'
		},
		{
			title: 'list them for sale',
			text: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.'
		}
	];

	const artistsData = [
		{
			username: 'CrypoPunks',
			points: 818.7,
			nftImage: 'nft_artist_01.png',
			profileImage: 'artist_01.png',
		},
		{
			username: 'Doodles',
			points: 74.9,
			nftImage: 'nft_artist_02.png',
			profileImage: 'artist_02.png',
		},
		{
			username: 'Bored Ape Yacht',
			points: 19.3,
			nftImage:  'nft_artist_03.png',
			profileImage: 'artist_03.png',
		},
		{
			username: 'Capsule House',
			points: 19.3,
			nftImage: 'nft_artist_04.png',
			profileImage: 'artist_04.png',
		}
	];




	return(
		<Page>
			<RootContainer>
				<ContainerLines>
					{
						[...Array(5)].map((_, index) => (
							<Line key={index}/>
						))
					}
				</ContainerLines>

				<ContainerMain>
					<ContainerMainLeft>
						<Title>
							Discover a New Era<br/>Of Crypto Currency
						</Title>
						<Label>
							Pandas NFT is the primier marketplace for NFT, which are digital items you<br/>
							can truly own. Digital items have existed for a long time, but never like<br/>
							this.
						</Label>
						<PrimaryButton config={{
							text: 'Get Started',
							handle: () => {}
						}}/>
					</ContainerMainLeft>

					<ContainerMainRight>

					</ContainerMainRight>
				</ContainerMain>

				<CardWallets/>

				<Container>
					<ContainerTitle>
						<TitleSection>
							Create And Sell Your<br/>
							NFTs
						</TitleSection>
					</ContainerTitle>

					<Cards>
						{ infoData.map((item, index) => (
							<CardInfo
								key={index}
								data={{
									index,
									title: item.title,
									text: item.text
								}}
							/>
						))}
					</Cards>
				</Container>

				<Container>
					<HeaderSectionArtits>
						<TitleSection>
								Live Auctions
						</TitleSection>

						<OutlineButton
							config={{
								text: 'View More',
								handle: () => {}
							}}
						/>
					</HeaderSectionArtits>

					<CardNFT/>
				</Container>

				<Container>
					<HeaderSectionArtits>
						<TitleSection>
							Featured Artist
						</TitleSection>

						<OutlineButton
							config={{
								text: 'View More',
								handle: () => {}
							}}
						/>
					</HeaderSectionArtits>

					<Cards>
						{ artistsData.map((item, index) => (
							<CardArtist
								key={index}
								data={item}
							/>
						))}
					</Cards>
				</Container>

				<CardDialog
					data={{
						title: 'Create Your Own NFT!',
						text: 'We have a large scale group to support each other in this game, \
								   Join us to get the news as soon as possible and follow our latest announcements!',
						configButton: {
							text: 'Join Community Now',
							handle: () => {}
						}
					}}
				/>
			</RootContainer>
		</Page>
	);
};

export default HomePage;
