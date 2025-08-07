const Header = (title) => {
  console.log(title)
  return (
      <h1>{title.course}</h1>
  )
}

const Content = (list) => {
  console.log(list.list[0])
  
  return (
  <div>
    <Part section={list.list[0]}/>
    <Part section={list.list[1]}/>
    <Part section={list.list[2]}/>
  </div>
  )
    
}

const Part = (section) => {
  console.log(section.section.name)
  return (
    <p>{section.section.name} {section.section.exercises}</p>
  )

}



const Total = (form) => {
  var totalnumber = 0
  for (let i = 0; i <= 2; i++){
    totalnumber += form.form[i].exercises
  }
  return (
    <p>Number of exercises is {totalnumber}</p>
  )
}

const App = () => {
  //const coursename = 'Half Stack application development'
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

  }

  
  return (
    <div>
      <Header course={course.name}/>
      <Content list={course.parts}/>
      <Total form={course.parts}/>
    </div>
  )
}



export default App