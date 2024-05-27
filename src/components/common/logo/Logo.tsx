import React from "react"
import "./logo.styles.scss"

const Logo: React.FC<{ text: string }> = ({ text }) => {

  return (
    <div className="logo">
      <span className="text-gray">&lt;</span>
      <span className="logo-text">{text}</span>
      <span className="text-gray">/&gt;</span>
    </div>
  )
}

export default Logo