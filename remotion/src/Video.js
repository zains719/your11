import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import { MovingTitleBackground } from './MovingTitleBackground'
import { fourthreethree } from './formations/fourthreethree'
import { fourOneTwoOneTwo } from './formations/fouronetwoonetwo';
import { fourtwothreeone } from './formations/fourtwothreeone';
import { oneThree } from './formations/oneThree'

const lineup = oneThree()

export const RemotionVideo = () => {
	return (
		<>
			<Composition 
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={1350}
				fps={30}
				width={480}
				height={300}
				defaultProps={{
					lineup,
					lineupName:'Test Lineup',
					preview:true,
					colors:{
                        backgroundColor: null,
                        nameBarColor: null,
                        nameTextColor: null,
                        numberBarColor: null,
                        numberTextColor: null,
                    }
				}}
			/>
		</>
	);
};
