import { useState } from 'react'

const MaxVotes = (props) => {
  if (props.maxVotesIndex < 0) {
    return (
    <p> No votes yet </p>
    )
  } else {
    return (
      <p> {props.text} </p>
      )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points , setPoints] = useState(Array(anecdotes.length).fill(0))
  const [maxVotesIndex, setMaxVotesIndex] = useState(-1)
  const max = anecdotes.length - 1
  
  const updatePoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log(copy)

    if (maxVotesIndex === -1) {
      setMaxVotesIndex(selected)
    } else if (copy[selected] > copy[maxVotesIndex]) {
      setMaxVotesIndex(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day </h1>
      {anecdotes[selected]}
      <p>
      <button onClick= {() => updatePoints()}>
          vote
        </button>
        <button onClick= {() => setSelected(Math.floor(Math.random() * max))}>
          anecdote
        </button>
      </p>
      <h1>Anecdote with most votes</h1>
      <MaxVotes maxVotesIndex={maxVotesIndex} text={anecdotes[maxVotesIndex]}/>
    </div>
  )
}

export default App