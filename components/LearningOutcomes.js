import React from 'react'

const LO = (props) => {
    // applied to div
    const lo_styles = {
        backgroundColor: "lightgrey",
        display: "inline-block",
        marginTop: "-10px",
        marginRight: "5px"
    }

    // applied to link itself
    const lo_text_styles = {
        color: "darkgrey",
        textDecoration: "none",
        padding: "4px 2px",
        borderRadius: "3px"
    }

    return (
        <div className="lo" style={lo_styles}>
            <a
                style={lo_text_styles}
                href={"https://forum.minerva.kgi.edu/app/outcome-index/learning-outcomes/cs112-" + props.lo}>
                {"#" + props.lo}
            </a>
        </div>
    )
}

/**
 * los: array of strings NO UPPERCASE NO HASHTAGE NO SPACES NO UNDERSCORES
 */
const LearningOutcomes = (props) => {
    return (
        <div>
            {props.los.map((e) => <LO key={e} lo={e} />)}
        </div>
    )
}

export default LearningOutcomes
