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
      <b>Total of {numberOfExercises} exercises</b>
    )
  }

  export default Course