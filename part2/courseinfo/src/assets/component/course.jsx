const Header = (props) => <h1>{props.title}</h1>

const Content = (props) => (
  props.parts.map((part) =>
    <p>{part.name} {part.exercises}</p>
))
    

const Course = (props) => (
  <div>
    <Header title={props.course.name} />
    <Content parts={props.course.parts} />
    <Total parts={props.course.parts} />
  </div>
)

const Total = (props) => {
  var subtotal = props.parts.reduce((accumulator, currentValue) => 
  accumulator + currentValue.exercises,
  0,);
  return <p>Number of exercises {subtotal}</p>
}

export default Course