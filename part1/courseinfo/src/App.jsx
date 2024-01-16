const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.content[0]}/>
      <Part part={props.content[1]}/>
      <Part part={props.content[2]}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    {name: part1, exercises:exercises1},
    {name: part2, exercises:exercises2},
    {name: part3, exercises:exercises3}
  ]

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App