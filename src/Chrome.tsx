import type { ReactNode } from 'react'
import './design-tokens.css'
import './primitives.css'

type ChromeProps = {
  leftDock: ReactNode
  rightDock: ReactNode
  children: ReactNode
}

export default function Chrome({ leftDock, rightDock, children }: ChromeProps) {
  return (
    <main className="cc-scene">
      <div className="cc-scene__frame">
        {leftDock}
        {children}
        {rightDock}
      </div>
    </main>
  )
}
