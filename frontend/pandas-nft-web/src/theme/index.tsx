import { ReactNode, FC } from 'react';
import { IconContext } from 'react-icons';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
	const config: DefaultTheme = {
		colors: {
			main: {
				primary: '#1E50FF',
				secondary: '#061032',
			},

			text: {
				primary: '#FFF',
				secondary: '#ADB9C7',
			},

			background: {
				primary: '#272D37',
				secondary: '#0F182E',
			},

			alerts: {
				success: '#38C976',
				info: '#3EAEFF',
				warning: '#FFA23A',
				error: '#FE5050'
			}
		},
	};

	return (
		<ThemeProvider theme={config}>
			<IconContext.Provider
				value={{ color: '#FFF', size: '20px', style: { margin: 10 } }}
			>
				{children}
			</IconContext.Provider>
		</ThemeProvider>
	);
};

export default Theme;
