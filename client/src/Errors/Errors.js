import React from 'react'
import "./Errors.css"

const Errors = ({errors}) => {
    return (
        <div className="errors">
           {errors.message}
        </div>
    )
}

export default Errors
