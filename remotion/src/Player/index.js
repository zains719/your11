import { FC } from "react"
import { interpolate, Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion"
import Name from "./name"
import ShirtPlain from '../../../public/images/shirts/shirtPlain'
import ShirtStripes from '../../../public/images/shirts/shirtStripes'
import ShirtHoops from '../../../public/images/shirts/shirtHoops'

const Player = ({ 
  name, 
  number,
  index, 
  playerRowIndex,
  rowLength,
  lineupLength,
  preview,
  colors,
  kit,
}) => {
  const videoConfig = useVideoConfig()
  const { width, height } = videoConfig

  const totalVerticalSpace = !preview ? 75 * (lineupLength + 1) : (75 * (lineupLength + 1) / 4)
  const playerHeightScaledDown = (height - totalVerticalSpace) / lineupLength
  const playerHeight = playerHeightScaledDown * 1.58

  const playerWidth = playerHeight
  var containerWidth = playerWidth
  if (containerWidth < (!preview ? 400 : 100)) {
    containerWidth = !preview ? 400 : 100
  } 

  const totalContainerWidth =  containerWidth * rowLength
  const containerSpace = (width - totalContainerWidth) / (rowLength + 1)
  const containerLeft = containerSpace + (containerSpace * index) + (index * containerWidth)

  const isKit = (kitType) => {
    return kitType === kit
  }

  const playerTop = () => {
    if (!preview) {
      if (lineupLength > 3) {
        return '800px'
      } else {
        return '725px'
      }
    } else {
      if (lineupLength > 3) {
        return '200px'
      } else {
        return '165px'
      }
    }
  }

  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  })

  const getTranslateUp = () => {
    const spacing = !preview ? 5600 / lineupLength : (5600 / lineupLength) / 4
    const baseTranslate = !preview ? 
    (lineupLength > 3 ? 3925 : 3425) / playerHeightScaledDown
    : 
    (lineupLength > 3 ? 3925 : 3425) / playerHeightScaledDown / 4
    return - (playerHeightScaledDown * baseTranslate) + (spacing * playerRowIndex)
  }

  const scaleDown = interpolate(
    spring({
			frame: frame - 100,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 2,
			},
    }),
    [0, 3],
    [1, -0.1],
    {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
  )

  const scaleIn = interpolate(
    spring({
      frame: frame,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 0.5,
			},
    }),
    [0, 3],
    [0, 3],
    {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
  )

  const translation = interpolate(
		spring({
			frame: frame - 100,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 2,
			},
		}),
		[0, 3],
		[0, getTranslateUp()],
    {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
	)

  const scale = frame < 50 ? scaleIn : (
    frame > 100 ? scaleDown : 1
  )

  return (
    <div
      style={{
      height: playerHeight,
      width: containerWidth,
      marginLeft: '500',
      left: containerLeft,
      top: playerTop(),
      position: "fixed",
      transform: `scale(${scale}) translateY(${translation}px)`,
    }}
    >
      {isKit("Plain") && (
      <ShirtPlain
      styleProps={{
        height: playerHeight,
        width: playerWidth, 
        opacity,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      shirtColor={colors.kitColor?.hex ?? '#DA291C'}
      sleeveColor={colors.sleeveColor?.hex ?? 'white'}
    />      )}
      {isKit("Stripes") && (
      <ShirtStripes
        styleProps={{
          height: playerHeight,
          width: playerWidth, 
          opacity,
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        shirtColor={colors.kitColor?.hex ?? '#DA291C'}
        sleeveColor={colors.sleeveColor?.hex ?? 'white'}
        stripeColor={colors.extraColor?.hex ?? 'white'}
        />
      )}
      {isKit("Hoops") && (
      <ShirtHoops
      styleProps={{
        height: playerHeight,
        width: playerWidth, 
        opacity,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      shirtColor={colors.kitColor?.hex ?? '#DA291C'}
      sleeveColor={colors.sleeveColor?.hex ?? 'white'}
      hoopsColor={colors.extraColor?.hex ?? 'white'}
      />
      )}
      <Name name={name} number={number} preview={preview} colors={colors} />
    </div>
  )
}

export default Player