import React, { Suspense } from "react"

import "./assets/styles/_main.scss"
import { BrowserRouter } from "react-router-dom"

import { Router } from "@/components/common"
import { MainLayout } from "@/components/layouts"

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Suspense fallback='Loading...'>

        <p>Header Here...</p>

        {/* All Routes */}
        <MainLayout>
          <Router />
        </MainLayout>

        <p>Footer here...</p>

      </Suspense>
    </BrowserRouter>
  )
}

export default App
