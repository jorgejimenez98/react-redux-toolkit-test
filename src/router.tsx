/* eslint-disable react-refresh/only-export-components */
import React from "react"

// Load Pages
const LoginPage = React.lazy(() => import("./features/auth/login/Index"))
const HomePage = React.lazy(() => import("./features/main/home/Index"))

import { PAGE_TITLES, PAGE_URLS } from "./lib/constants"

import { AppRoute } from "@/lib/interfaces"

export const pagesRoutes: AppRoute[] = [

  // Login Page
  {
    title: PAGE_TITLES.LOGIN,
    path: PAGE_URLS.LOGIN,
    element: <LoginPage />
  },

  // Home Page
  {
    title: PAGE_TITLES.HOME,
    path: PAGE_URLS.HOME,
    element: <HomePage />,
    isProtected: true
  }
]
