// import React, { Children } from 'react'

const Card = ({className, children}) => {
  return (
    <article className={`card ${className}`}>
      {children}
    </article>
  )
}

export default Card