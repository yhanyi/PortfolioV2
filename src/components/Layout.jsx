import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div
    className={`w-full h-full inline-block z-0 p-32 xl:-p-24 lg:p-16 md:p-12 sm:p-6
    bg-light dark:bg-dark
    ${className}`}>
        {children}
    </div>
  )
}

export default Layout