import { FC } from "react"
import { Sequence } from "remotion"
import Player from "../Player"

const PlayerRow = ({ 
  players, 
  playerRowIndex,
  lineupLength,
  preview,
  colors,
  kit,
}) => {
  return (
    <div>
      {Object.keys(players).map((index) => {
        const player = players[index]
        return (
          <Sequence key={index} durationInFrames={Infinity} from={index * 12}>
            <Player 
            name={player.name} 
            number={player.number}
            index={index} 
            playerRowIndex={playerRowIndex}
            rowLength={Object.keys(players).length}
            lineupLength={lineupLength}
            preview={preview}
            colors={colors}
            kit={kit}
            />
          </Sequence>
        )
      })}
    </div>
  )
}

export default PlayerRow