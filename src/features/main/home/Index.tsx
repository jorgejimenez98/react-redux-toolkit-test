import { JSX } from "react"

import { Icon } from "@/components/ui"

const HomePage = (): JSX.Element => {
  return (
    <div>
      <h1>Home Page content <Icon name="delete" onClick={() => console.warn("ASD")}/> </h1>

    </div>
  )
}

export default HomePage