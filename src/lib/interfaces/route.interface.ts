import { JSX, LazyExoticComponent } from "react"

export interface AppRoute {
    title: string
    path: string
    element: JSX.Element | LazyExoticComponent<() => JSX.Element>
    isProtected?: boolean
}