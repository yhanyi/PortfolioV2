import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center w-full border-t-2 py-6 border-solid text-dark border-dark font-light text-sm dark:text-light dark:border-light sm:text-base">
        <div className="items-center justify-center">&copy; {new Date().getFullYear()} Yeoh Han Yi. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer