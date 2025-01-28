import { ReactNode } from 'react'

interface Title1Props {
  children: ReactNode
}

export default function Title1({ children }: Title1Props) {
  return (
    <h1
      className="font-[family-name:var(--font-almendra-regular)] text-2xl drop-shadow-text">
      {children}
    </h1>
  )
}