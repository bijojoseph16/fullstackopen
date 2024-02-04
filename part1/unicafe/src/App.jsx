import { useState } from 'react'

const Display = (props) => {
  return (
    <div> {props.text} {props.count} </div>
  )
}

const Statistics = (props) => {
  const [good, bad, neutral] = props.stat

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div> 
        <h1>Statistics</h1>
        <Display text='Good' count={good}/>
        <Display text='Neutral' count={neutral}/>
        <Display text='Bad' count={bad}/>
        <Display text='All' count={good + bad + neutral}/>
        <Display text='Average' count={(good-bad)/(good+bad+neutral)}/>
        <Display text='Positive' count={((good)/(good+bad+neutral))*100}/>
      </div>
    )
  }

}

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodCounter = () => setGood(good + 1)
  const badCounter = () => setBad(bad + 1)
  const neutralCounter = () => setNeutral(neutral + 1)
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={goodCounter} text='Good'/>
      <Button onClick={neutralCounter} text='Neutral'/>
      <Button onClick={badCounter} text='Bad'/>
      <Statistics stat={[good, neutral, bad]}/>
    </div>
  )
}

export default App