import { Routes, Route, Navigate } from 'react-router-dom';
import {
	HomePage,
	DocsPage,
	DiscoverPage,
	BlogPage,
	ContactPage,
	AboutPage,
	NotFoundPage
} from '@pages';

const PublicRoutes = () => {
	return(
		<Routes>
			<Route
				path='/'
				element={<Navigate to='/home'/>}
			/>
			<Route
				path='/home'
				element={<HomePage/>}
			/>
			<Route
				path='/discover'
				element={<DiscoverPage/>}
			/>
			<Route
				path='/docs'
				element={<DocsPage/>}
			/>
			<Route
				path='/blog'
				element={<BlogPage/>}
			/>
			<Route
				path='/about-us'
				element={<AboutPage/>}
			/>
			<Route
				path='/contact-us'
				element={<ContactPage/>}
			/>
			<Route
				path='*'
				element={<NotFoundPage/>}
			/>
		</Routes>
	);
};

export default PublicRoutes;
