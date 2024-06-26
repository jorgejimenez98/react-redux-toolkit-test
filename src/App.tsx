import React, { Suspense } from "react"

import "@/lib/config/i18n"
import "@/assets/styles/_main.scss"
import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"

import { Loader } from "./components/ui"
import { selectCurrentUser } from "./stores/slices"
import { useAppSelector } from "./stores/store"

import { ConfirmModal, Router, ScrollUp } from "@/components/common"
import { Flex, Footer, MainHeader, MainLayout, PublicHeader } from "@/components/layouts"

const App: React.FC = () => {
  const user = useAppSelector(selectCurrentUser)
  const CurrentHeader = user ? MainHeader : PublicHeader

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>

        <Flex direction="col" className="min-vh-100">
          {/* Header */}
          <CurrentHeader />

          {/* All Routes */}
          <MainLayout>
            <Router />
          </MainLayout>

          {/* Footer */}
          <Footer />

          {/* Wrappers */}
          <ScrollUp />
          <ConfirmModal />
          <Toaster />
        </Flex>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
