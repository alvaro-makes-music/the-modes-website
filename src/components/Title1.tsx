import {ReactNode} from 'react'

interface Title1Props {
    children: ReactNode
}

export default function Title1({children} : Title1Props) {
    return(
        <h1
        className="text-5xl md:text-6xl font-bold text-white-600 font-[family-name:var(--font-ed-celandine-outline)] mb-1"
        style={{
          textShadow: "0.03em 0 0 rgba(254, 0, 254, 1), -0.03em -0.01em 0 rgba(0, 240, 240, 1)"
        }}>
        {children}
      </h1>
    )
}