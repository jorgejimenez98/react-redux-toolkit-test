import { Route, Routes } from "react-router-dom"

import { pagesRoutes } from "@/router"

const Router: React.FC = () => {
  const aplicationRoutes = pagesRoutes.map(route => {
    return (
      <Route
        key={route.title}
        path={route.path}
        element={route.element as React.ReactNode}
      />
    )
  })

  return <Routes>{aplicationRoutes}</Routes>
}

export default Router