import { IButton } from './button';

export interface ICardDialog {
	title: string;
	text: string;
	configButton: IButton
}

export interface ICardInfo {
	title: string;
	text: string;
	index: number;
}

export interface ICardArtist {
	username: string;
	points: number;
	nftImage: string;
	profileImage: string;
}
