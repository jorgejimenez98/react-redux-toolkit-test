import React, { useState } from "react"

import { useClickOutside } from "@/hooks"

interface DropdownProps {
    children: React.ReactNode
    text: string
}

const Dropdown: React.FC<DropdownProps> = ({ children, text }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useClickOutside(() => setIsOpen(false))

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {text}
      </button>

      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown