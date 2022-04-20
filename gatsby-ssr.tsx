import * as React from "react"
import type { GatsbySSR } from "gatsby"
import { SiteProvider } from "./src/context/site-context"

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({
  element,
}) => {
  return (
    <SiteProvider>
      {element}
    </SiteProvider>
  )
}