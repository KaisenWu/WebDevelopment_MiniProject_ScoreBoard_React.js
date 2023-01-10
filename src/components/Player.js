import React from 'react'
import Counter from './Counter'

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {/* Define the props function and variable */}
        <button
          className="remove-player"
          onClick={() => props.removePalyer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>
      <Counter />
    </div>
  )
}

export default Player