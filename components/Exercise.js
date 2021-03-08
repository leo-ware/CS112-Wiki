import React from 'react'

/**
 * 
 * setup: r code to run before each session
 * initial: r code to populate the exercise ith
 * solution: r code, the right answer
 * tests: tests to compare solution to user submission, complicated
 * hint: hint text
 * 
 * height is automatically in pixels
 */
const Exercise = (props) => {
    return (
        <div className="exercise" style={{margin: "50px 100px"}}>
            <div data-datacamp-exercise data-lang="r" data-height={props.height}>
                <code data-type="pre-exercise-code">{props.setup}</code>
                <code data-type="sample-code">{props.initial}</code>
                <code data-type="solution">{props.solution}</code>
                <code data-type="sct">{props.tests}</code>
                <div data-type="hint">{props.hint}</div>
            </div>
        </div>
    )
}

export default Exercise
