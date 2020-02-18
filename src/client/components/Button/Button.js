import React from "react"
import PropTypes from "prop-types"

import "./Button.styles.css"

const Button = ({ children, ...props }) => {
  return (
    <button className="btn" type="button" {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
