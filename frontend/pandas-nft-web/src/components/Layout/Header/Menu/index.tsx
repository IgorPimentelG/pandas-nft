import { NavLink } from 'react-router-dom';
import { Container, Label, Line } from './styles';

const Menu = () => {

	const routes = [
		{ name: 'home', link: '/home' },
		{ name: 'discover', link: '/discover' },
		{ name: 'docs', link: '/docs' },
		{ name: 'blog', link: '/blog' },
		{ name: 'about us', link: '/about-us' },
		{ name: 'contact us', link: '/contact-us' },
	];

	return(
		<Container>
			{ routes.map((route, index) => (
				<NavLink key={index} to={route.link}>
					{({ isActive }) => (
						<>
							<Label isActive={isActive}>{route.name}</Label>
							{isActive && <Line/>}
						</>
					)}
				</NavLink>
			))}
		</Container>
	);
};

export { Menu };
