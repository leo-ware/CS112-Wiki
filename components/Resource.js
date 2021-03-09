import React from 'react'

const Resource = (props) => {
    const style_div = {
        border: "solid 2px black",
        borderRadius: "10px",
        padding: "10px 15px",
        lineHeight: "1",
        margin: "10px 0"
    }

    const style_p = {
        marginBottom: "5px",
        marginBlockStart: "0"
    }
    return (
        <div style={style_div}>
            <p style={style_p} className="Resource-name"><strong>{props.name}</strong></p>
            <p style={style_p} className="Resource-description">{props.description}</p>
            <a style={style_p} className="Resource-link" href="https://www.instagram.com/whtgvs/">{props.link}</a>
        </div>
    )
}

export default Resource
