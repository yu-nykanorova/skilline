import React from 'react'

export const ContainerWhite = ({ className, children }) => {
  return (
    <div className={`container-white ${className}`}>
        {children}
    </div>
  )
}
