import { Route, Routes, Navigate } from "react-router-dom"

import { PAGE_URLS } from "@/lib/constants"
import { pagesRoutes } from "@/router"
import { selectCurrentUser } from "@/stores/slices"
import { useAppSelector } from "@/stores/store"

const Router: React.FC = () => {
  const user = useAppSelector(selectCurrentUser)

  const applicationRoutes = pagesRoutes.map(route => {
    // If user is not authenticated, redirect to Login page

    if (route?.isProtected && !user) {
      return (
        <Route
          key={route.title}
          path={route.path}
          element={<Navigate to={PAGE_URLS.LOGIN} />}
        />
      )
    }

    return (
      <Route
        key={route.title}
        path={route.path}
        element={route.element as React.ReactNode}
      />
    )
  })

  return <Routes>{applicationRoutes}</Routes>
}

export default Router