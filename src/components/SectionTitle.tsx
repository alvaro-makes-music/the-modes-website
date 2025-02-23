import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h1
      className="font-[family-name:var(--font-almendra-regular)] text-2xl md:text-4xl drop-shadow-text">
      {children}
    </h1>
  )
}