import { Container, Icon, LabelTime, RootContainer } from './styles';
import { Fire } from '@assets/images';
import { useTimer } from 'react-timer-hook';
import { FC } from 'react';

const Countdown: FC<{ expiresIn: Date }> = ({ expiresIn }) => {

	const { days, hours, minutes, seconds } = useTimer({ expiryTimestamp: expiresIn});

	function formatLabel(time: number) {
		if (time < 10) {
			return `0${time}`;
		}
		return String(time);
	}

	return(
		<RootContainer>
			<Container>
				<Icon src={Fire}/>
				<LabelTime>
					{formatLabel(days)} : {formatLabel(hours)} : {formatLabel(minutes)} : {formatLabel(seconds)}
				</LabelTime>
			</Container>
		</RootContainer>
	);
};

export { Countdown };
