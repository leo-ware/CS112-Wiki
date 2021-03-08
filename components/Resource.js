import React from 'react'

const Resource = (props) => {
    const style = {
        border: "solid 2px black",
        borderRadius: "10px",
        padding: "10px 15px",
        lineHeight: "60%"
    }
    return (
        <div style={style}>
            <p style={{fontWeight: "bold"}} className="Resource-name">{props.name}</p>
            <p className="Resource-description">{props.description}</p>
            <a className="Resource-link" href="https://www.instagram.com/whtgvs/">{props.link}</a>
        </div>
    )
}

export default Resource
