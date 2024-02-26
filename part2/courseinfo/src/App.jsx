const Course = (props) => {
  return (
    <div>
      <Header header={props.course.name}/>
      <Content content={props.course.parts}/>
      <Total parts={props.course.parts}/>
    </div>
  )
}
const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.content.map(part => <Part key={part.id} part={part}/>)}
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
  const numberOfExercises = props.parts.reduce((exercises, part) => {
    exercises += part.exercises
    return exercises
  },0);


  return (
    <p>Total of {numberOfExercises} exercises</p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App