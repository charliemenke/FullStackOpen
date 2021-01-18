import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handler, text }) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Stats = ({good,bad,neutral}) => {
  if(good + bad + neutral === 0) {
    return (
      <p>No Feedback Given</p>
    )
  }
  return (
    <>
    <h1>Stats</h1>
    <Stat text="Good" value={good} />
    <Stat text="Neutral" value={neutral} />
    <Stat text="Bad" value={bad} />
    <Stat text="All" value={bad+good+neutral} />
    <Stat text="Average" value={(good+(neutral*0)+(bad*-1))/3} />
    <Stat text="Positive %" value={(good/(bad+good+neutral))*100} />
    </>
  )
}

const Stat = ({ text, value }) => <tr><td>{text}</td> <td>{value}</td></tr>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      {/* <Button handler={() => setFeedback()} text="good" />
      <Button />
      <Button /> */}
      <Button handler={() => setGood(good + 1)} text="Good" />
      <Button handler={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handler={() => setBad(bad + 1)} text="Bad" />
      <Stats good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)