import { Sequence, useCurrentFrame, useVideoConfig, Audio, interpolate } from 'remotion';
import PlayerRow from './PlayerRow'
// import audio from '../../public/images/audio.mp3'
// import logo from '../../public/images/logo/logo-white.svg'

import { MovingTitleBackground } from './MovingTitleBackground'

export const HelloWorld = ({ preview=false, lineup, lineupName, colors, kit="Plain" }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

  const opacity = interpolate(frame, [videoConfig.durationInFrames - 140, videoConfig.durationInFrames - 115], [1.0, 0], {
    extrapolateRight: "clamp",
  })

	const logoContainerOpacity = interpolate(frame, [videoConfig.durationInFrames - 155, videoConfig.durationInFrames - 125], [0, 1.0], {
    extrapolateRight: "clamp",
  })

	const logoOpacity = interpolate(frame, [videoConfig.durationInFrames - 110, videoConfig.durationInFrames - 105], [0, 1.0], {
    extrapolateRight: "clamp",
  })

	const translation = interpolate(frame, [videoConfig.durationInFrames - 145, videoConfig.durationInFrames - 140], [-100, 0], {
    extrapolateRight: 'clamp',
  })

  const getRGB = (rgbObject) => {
	  if (!rgbObject) {
		  return null
	  }
	  return 'rgb(' + rgbObject.r.toString() + ', ' + rgbObject.g.toString() + ', ' + rgbObject.b.toString() + ')'
  }

  const generateLinearGradient = (color) => {
	  const rgb = color.split(',')
	  const r = rgb[0].split('(')[1]
	  const g = rgb[1].split(' ')[1]
	  const b = rgb[2].split(' ')[1].split(')')[0]
	  const rgbBlend = 'rgba(' + r + ', ' + g + ', ' + b + ', 0.80)'
	  const rbgStart = 'rgba(' + r + ', ' + g + ', ' + b + ', 1)'
	  return 'linear-gradient(0deg, ' + rgbBlend + ' 0%, ' + rbgStart + ' 100%)'
	}

	return (
		<>
			<div style={{
				flex: 1, 
				opacity,
				background: generateLinearGradient(getRGB(colors.backgroundColor?.rgb) ?? 'rgba(23, 0, 176, 1)') ,	
			}}
			>
				<MovingTitleBackground 
				title={lineupName} 
				preview={preview} 
				color={getRGB(colors.backgroundColor?.rgb) ?? 'rgba(23, 0, 176, 1)'} 
				/>
				{/* <Audio
					src={audio}
					startFrom={0}
					endAt={videoConfig.durationInFrames}
				/> */}
				{Object.keys(lineup).map((index) => {
					const playerRow = lineup[index]
					return (
						<Sequence key={index} durationInFrames={Infinity} from={75 + (index * 150)}>
							<PlayerRow 
							players={playerRow}
							playerRowIndex={index}
							lineupLength={Object.keys(lineup).length}
							preview={preview}
							colors={colors}
							kit={kit}
							/>
						</Sequence>
					)
				})}
			</div>
			<div
			style={{
				position: 'absolute',
				flex: 1, 
				backgroundColor: '#5F01FF',
				height: '100%',
				width: '100%',
				opacity: logoContainerOpacity,
				display: 'flex'
			}}
			>
				<img
					src='/images/logo/logo-white.png'
					style={{
						height: !preview ? '200px' : '50px',
						opacity: logoOpacity,
						margin: 'auto',
					}}
				/>
			</div>
		</>
	);
};
