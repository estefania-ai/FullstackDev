import React, {useState} from 'react'

const App = () => {
  const[good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  return (
    <div>
      <h2>GIVE FEEDBACK</h2>
      <button onClick={() => {setGood(good+1); console.log(good)}}>good</button>
      <button onClick={() => {setNeutral(neutral+1); console.log(neutral)}}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      <h2>STATISTICS</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {bad+neutral+good}</p>
      <p>average {((bad * -1)+(neutral*0)+(good*1))/(bad+good+neutral)}</p>
      <p>positive {(good/(good+neutral+bad))*100}%</p>
    </div>
  )
}

export default App