import { Category } from '../enum/category';
import { User } from './user';

export type Token = {
	id: number;
	name: string;
	description: string;
	category: Category;
	image: string;
	creator: User;
	owner: User;
	price: number;
	expiresIn: Date;
	network: string;
}

