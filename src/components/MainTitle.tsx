import { ReactNode } from 'react'
import styles from '@/app/styles/Title.module.css';
import Link from 'next/link';


interface MainTitleProps {
  children: ReactNode
}

export default function MainTitle({ children }: MainTitleProps) {
  return (
    <Link href="/">
      <h1
        className={`md:mt-8 md:text-8xl text-5xl font-bold text-white-600 font-[family-name:var(--font-ed-celandine-outline)] mb-1 ${styles.title}`}
        >
        {children}
      </h1>
    </Link>
  )
}