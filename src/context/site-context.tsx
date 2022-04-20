import * as React from "react"

const defaultValues = {}

export const SiteContext = React.createContext(defaultValues)

export const SiteProvider = ({ children }:{children:any}) => {
  return (
    <SiteContext.Provider
      value={{
        ...defaultValues,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}