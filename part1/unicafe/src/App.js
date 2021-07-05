import React, {useState} from 'react'

const Statistics = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
  
}

const Display = ({good,bad,neutral,allClicks}) =>{
  console.log({allClicks})
  if(allClicks.length === 0){
    return(
      <div>
        <p>No Feedback Given </p>
      </div>
    )
  }
  return(

      <table >
    
        <Statistics name="good" value={good}/>
       
        <Statistics name="neutral" value={neutral}/>
   
        <Statistics name="bad" value={bad}/>
     
        <Statistics name="all" value={good + neutral + bad}/>
   
        <Statistics name="average" value={((bad * -1)+(neutral*0)+(good*1))/(bad+good+neutral)}/>
     
        <Statistics name="positive" value={(good/(good+neutral+bad))*100 + "%"}/>
       
    </table>

  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.name}</button>
  )
}
const App = () => {
  const[good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
 
  return (
    <div>
      <h2>GIVE FEEDBACK</h2>
      <Button handleClick={() => {setGood(good+1); setAll(allClicks.concat("G"))}} name="good"/>
      <Button handleClick={() => {setNeutral(neutral +1); setAll(allClicks.concat("N")) }} name ="neutral"/>
      <Button handleClick={() => {setBad(bad +1); setAll(allClicks.concat("B"))}} name ="bad"/>
      <h2>STATISTICS</h2>
      <Display good={good} bad={bad} neutral={neutral} allClicks={allClicks}/>
     
    </div>
  )
}

export default App