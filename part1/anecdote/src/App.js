import React, {useState} from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the developent time...The remaining 10 percent of the code accounte for 90 percent of the development time',
    'Any fool can whrite code that a computer understands. Good programmers write code that humnas can understand.',
    'Premature optimization is the root of all evil',
    'Debuggin is twice as hard as writing the code in the first place.',
    'Programming without and extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({'0':0 ,'1':0, '2':0 , '3':0, '4':0, '5':0, '6':0})
  const getNum = () => {
    return (Math.floor(Math.random() * anecdotes.length))
  }
  const
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <button onClick={}>vote</button>
      <button onClick={() => {setSelected(getNum); console.log(selected)}}> nextAnecdote</button>
      <h2>Anecdote with the most votes</h2>
    </div>
  )
}

export default App;
