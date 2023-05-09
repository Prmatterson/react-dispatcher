import React from 'react'

export function Cell({ white, children }) {
  const fill = white ? 'white' : 'black'
  const stroke = white ? 'white' : 'black'

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </div>
  )
}