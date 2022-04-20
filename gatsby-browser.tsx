import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import { SiteProvider } from "./src/context/site-context"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return (
    <SiteProvider>
      {element}
    </SiteProvider>
  )
}