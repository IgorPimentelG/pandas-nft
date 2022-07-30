import { ICardArtist } from '@shared/model/interfaces/layout';
import { FC } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { Card, ContainerEther, ContainerInfo, ContainerProfileImage, LabelPoints, LabelUsername, NFTImage, ProfileImage } from './styles';

const CardArtist: FC<{ data: ICardArtist }> = ({ data }) => {

	const { username, points, profileImage, nftImage } = data;

	return(
		<Card>
			<NFTImage src={require(`../../../assets/tmp/${nftImage}`)}/>

			<ContainerProfileImage>
				<ProfileImage src={require(`../../../assets/tmp/${profileImage}`)}/>
			</ContainerProfileImage>

			<ContainerInfo>
				<LabelUsername>{username}</LabelUsername>

				<ContainerEther>
					<FaEthereum size={14} style={{ margin: 0 }}/>
					<LabelPoints>{points}K</LabelPoints>
				</ContainerEther>
			</ContainerInfo>
		</Card>
	);
};

export { CardArtist };
