import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			main: {
				primary: string;
				secondary: string;
			},

			text: {
				primary: string;
				secondary: string;
			},

			background: {
				primary: string;
				secondary: string;
			},

			alerts: {
				success: string;
				info: string;
				warning: string;
				error: string;
			}

		}
	}
}
