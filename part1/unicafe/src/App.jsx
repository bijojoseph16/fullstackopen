import { useState } from 'react'

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
        <table>
          <StatisticsLine text="good" value = {good}/>
          <StatisticsLine text="neutral" value = {neutral}/>
          <StatisticsLine text="bad" value = {bad}/>
          <StatisticsLine text="All" value = {good + bad + neutral}/>
          <StatisticsLine text="Average" value = {(good-bad)/(good+bad+neutral)}/>
          <StatisticsLine text="Positive" value = {((good)/(good+bad+neutral))*100}/>
        </table>

      </div>
    )
  }

}

const StatisticsLine = (props) => {
    return (
      <>
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
          </tr>
        </tbody>
      </>
    )
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