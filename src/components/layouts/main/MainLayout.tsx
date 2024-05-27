import React from "react"

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="app-main-layout">
      {children}
    </main>
  )
}

export default MainLayout