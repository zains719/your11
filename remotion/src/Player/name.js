import { interpolate, useCurrentFrame, useVideoConfig } from "remotion"
// import './player.css'

const Name = ({name  = "", number = -1, preview, colors }) => {
  const frame = useCurrentFrame()
  const videoConfig = useVideoConfig()

  const text_opacity = interpolate(frame, [45, 50], [0, 1])
  const div_opacity = interpolate(frame, [30, 40], [0, 1])

  const translation = interpolate(frame, [35, 39], [-100, 0], {
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
	  const rgbBlend = 'rgba(' + r + ', ' + g + ', ' + b + ', 0.70)'
	  const rbgStart = 'rgba(' + r + ', ' + g + ', ' + b + ', 1)'
	  return 'linear-gradient(90deg, ' + rgbBlend + ' 0%, ' + rbgStart + ' 100%)'
	}

  return (
      <div
      style={{
        opacity: div_opacity,
        display: 'flex',
        maxHeight: !preview ? '50px' : '12.5px',
        width: '100%',
        borderRadius: !preview ? '20px' : '5px',
        transform: `translateX(${translation}px)`,
        backgroundColor: 'white',
        padding: 0,
      }}
      >
        <div
        style={{
          opacity: div_opacity,
          width: '20%',
          height: 'auto',
          backgroundColor: colors.numberBarColor?.hex ?? 'white',
          borderTopLeftRadius: !preview ? '20px' : '5px',
          borderBottomLeftRadius: !preview ? '20px' : '5px',
          color: colors.numberTextColor?.hex ?? 'black',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <h3
          style={{
            fontSize: !preview ? '30px' : '7.5px',
            opacity: text_opacity,
            fontFamily: 'Atkinson Hyperlegible, sans-serif',
            fontWeight: 400,
          }}
          >
            {number}
          </h3>
        </div>
        <div
        style={{
          opacity: div_opacity,
          width: '85%',
          height: 'auto',
          background: generateLinearGradient(getRGB(colors.nameBarColor?.rgb) ?? 'rgba(23, 0, 176, 1)'),
          color: colors.nameTextColor?.hex ?? 'white',
          borderTopRightRadius: !preview ? '20px' : '5px',
          borderBottomRightRadius: !preview ? '20px' : '5px',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <h3
          style={{
            fontSize: !preview ? '30px' : '7.5px',
            opacity: text_opacity,
            fontFamily: 'Atkinson Hyperlegible, sans-serif',
            fontWeight: 400,
          }}
          >
          {name}
          </h3>
        </div>
      </div>
  )
}

export default Name