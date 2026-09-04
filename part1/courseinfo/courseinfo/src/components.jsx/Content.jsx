import Part from "./Part"

const Content = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}
export default Content