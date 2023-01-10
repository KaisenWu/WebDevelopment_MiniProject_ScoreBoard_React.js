import React, {useState} from 'react'

const Counter = () => {

    const [score, setScore] = useState(0)

    function increaseScore() {
        setScore(score+1)
    }

    function descreaseScore() {
        setScore(score-1)
    }

  return (
    <div className="counter">
        <button
          className="counter-action decrement"
          onClick={descreaseScore}
        > - </button>
        <span className="counter-score">{score}</span>
        <button
          className="counter-action increment"
          onClick={increaseScore}
        > + </button>
      </div>
  )
}

export default Counter