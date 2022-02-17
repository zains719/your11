import { useEffect, useState } from "react"

export const StencilText = ({ outline, text, fps, frame, textStyle, preview }) => {
  const [stencilColor, setStencilColor] = useState()

  useEffect(() => {
    setStencilColor(getStencilColor())
  }, [textStyle])

  const getStencilColor = () => {
    const color = textStyle.color
    const rgb = color.split(',')
    let r = parseInt(rgb[0].split('(')[1])
    let g = parseInt(rgb[1].split(' ')[1])
    let b = parseInt(rgb[2].split(' ')[1])
    r += 82
    g += 82
    b += 82
    return 'rgb(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ')'
  }

  const outlineStyle = outline
    ? {
        WebkitTextStroke: "1px " + stencilColor,
        opacity: 0.3,
        color: "transparent",
      }
    : {
        color: stencilColor,
        opacity: 0.2,
      }

  let style = { ...textStyle, ...outlineStyle }

  return (
    <h1
      style={{
        display: "inline-block",
        fontFamily: "CeraPro, sans-serif",
        fontWeight: 900,
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        clear: "both",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontSize: !preview ? 80 : 40,
        margin: 0,
        ...style,
      }}
    >
      {text}
    </h1>
  )
}
