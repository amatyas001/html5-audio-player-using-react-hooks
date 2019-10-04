import React, { lazy, Suspense } from 'react'

const Player = lazy(() => import('../components/Player'))

export default function DefaultPage(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Player />
    </Suspense>
  )
}