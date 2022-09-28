import React from "react"

type Props = {
  children: React.ReactNode
}

export const Wrapper = ({children}: Props) => {
  return (
    <div className='flex flex-col min-h-screen bg-primary-background'>
      <div className='flex-1 overflow-x-hidden'>
        {children}
      </div>
    </div>
  )
}
