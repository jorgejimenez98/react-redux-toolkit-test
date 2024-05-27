import React, { Suspense } from "react"

import "./assets/styles/_main.scss"
import { BrowserRouter } from "react-router-dom"

import { Router } from "@/components/common"

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Suspense fallback='Loading...'>

        {/* All Routes */}
        <Router />

      </Suspense>
    </BrowserRouter>
  )
}

export default App
