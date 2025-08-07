import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleclick}>{props.text}</button>
)

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
  const initialarray = new Array(7).fill(0)
  const [votes, setVotes] = useState(initialarray)
  const [topvote, settopvote] = useState(0)

  
  const genNumber = () => {
    var number = selected
    while (number == selected){
      number = Math.floor(Math.random()*7)
    }
    console.log(number)
    setSelected(number)
  }

  const handleVotes = (prop) => {
    var copy = [...votes]
    copy[prop] += 1
    console.log(copy)
    setVotes(copy)
    console.log(votes)
    getTopVote(prop)
  }

  const getTopVote = (prop) => {
    var newtopvote = topvote
    var copy = votes
    copy[prop] += 1
    for(var i=0; i<7; i++){
      if(copy[i] > copy[topvote]){
        newtopvote = i
      }
    }
    console.log("topvote: ", newtopvote)
    settopvote(newtopvote)
  }

  return (
    <div>
      
      <h1>Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <h3>has {votes[selected]} votes</h3>
      <Button handleclick={()=>genNumber()} text="next anecdote"/>
      <Button handleclick={()=>handleVotes(selected)} text="vote"/>

      <h1>Anecdote with most votes</h1>
      <h2>{anecdotes[topvote]}</h2>
      <h3>has {votes[topvote]} votes</h3>

    </div>
  )
}

export default App