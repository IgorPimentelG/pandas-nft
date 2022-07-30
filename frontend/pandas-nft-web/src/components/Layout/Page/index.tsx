import { FC, ReactNode } from 'react';
import Header from '../Header';
import { Footer } from '../Footer';
import { Container } from './styles';

const Page: FC<{ children: ReactNode }> = ({ children }) => {
	return(
		<Container>
			<Header/>
			{children}
			<Footer/>
		</Container>
	);
};

export { Page };
