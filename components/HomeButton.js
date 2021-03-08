import React from 'react'

const HomeButton = () => {
    const style = {
        position: "absolute",
        top: "20px",
        left: "25px"
    }
    return (
        <a style={style} href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
        </a>
    )
}
export default HomeButton
