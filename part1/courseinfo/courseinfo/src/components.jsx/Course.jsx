import React from 'react'
import Header from './Header'
import Content from './Content'
const Course = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <p><b>total of {total} exercises</b></p>
        </div>
    )
}


export default Course

