var _ = require("lodash")
import * as remotion from "remotion"
import { StencilText } from "./StencilText"

export const MovingTitleBackground = ({ title, preview, color }) => {
  const { fps, durationInFrames, width, height } = remotion.useVideoConfig()
  const frame = remotion.useCurrentFrame()

  const opacity = remotion.interpolate(frame, [durationInFrames - 165, durationInFrames - 150], [1.0, 0], {
    extrapolateRight: "clamp",
  })

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        textAlign: "center",
        marginTop: 0,
        marginLeft: -3000,
        marginRight: -3000,
        lineBreak: "anywhere",
        opacity,
      }}
    >
      {_.fill(Array(25), 1).map((item, index) => {
        const style =
          index % 2 === 0
            ? { marginLeft: frame * 0.5 }
            : { marginLeft: frame * -2 }

        return (
          <div style={style}>
            <StencilText
              outline={index % 2 === 1}
              text={_.repeat(title + " ", 50)}
              fps={fps}
              frame={frame}
              textStyle={{
                color: color,
              }}
              preview={preview}
            />
          </div>
        )
      })}
    </div>
  )
}
