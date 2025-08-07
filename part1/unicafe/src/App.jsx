import { useState } from 'react'

const Button = (prop) =>(
  <button onClick={prop.click}>{prop.text}</button>
)

const StatisticLine = (prop) =>{
  return (
    <tr>
      <td>{prop.text}</td>
      <td>{prop.count}</td>
    </tr>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setdad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  

  const handleonclick = (props) => {
    if (props == 0){
      var newgood = good + 1
      setGood(newgood)
      console.log("good", good)
      handleStatChange(1)
    }
    else if (props == 1){
      var newneutral = neutral + 1
      setNeutral(newneutral)
      console.log(neutral)
      handleStatChange(0)
    }
    else {
      var newbad = bad + 1
      setdad(newbad)
      console.log(bad)
      handleStatChange(-1)
    }
  }

  const handleStatChange = (props) =>{ 
    var newaverage = ((average*total)+props)/(total+1)
    if (props == 1){
      var newpositive = ((good+1)/(total+1))*100
    } else {
      var newpositive = (good)/(total+1)*100
    }
    //console.log("newtotal ", newtotal)
    console.log("newaverage ", newaverage)
    console.log("newpositive ", newpositive)

    setTotal(total+1)
    setAverage(newaverage)
    setPositive(newpositive)
  }
  if (total == 0){
    return (
      <div>
      <h1>Give feedback </h1>
      <Button click={() => handleonclick(0)} text="Good"/>
      <Button click={() => handleonclick(1)} text="Neutral"/>
      <Button click={() => handleonclick(2)} text="Bad"/>
      <h1>Statistics</h1>
      <h2>No response given</h2>
      </div>
    )    
  }
  else {
  return (
    <div>
      <h1>give feedback </h1>
      <Button click={() => handleonclick(0)} text="Good"/>
      <Button click={() => handleonclick(1)} text="Neutral"/>
      <Button click={() => handleonclick(2)} text="Bad"/>
      <h1>statistics</h1>
      <table>
      <StatisticLine text="Good" count={good}/>
      <StatisticLine text="Netural" count={neutral}/>
      <StatisticLine text="Bad" count={bad}/>
      <StatisticLine text="Total" count={total}/>
      <StatisticLine text="Average" count={average}/>
      <StatisticLine text="Positive" count={positive + "%"} />
      </table>
    </div>
  )
  }
}

export default App