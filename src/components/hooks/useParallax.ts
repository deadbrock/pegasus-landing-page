import { useScroll, useTransform, MotionValue } from 'framer-motion'
import type { RefObject } from 'react'

export function useParallax(ref: RefObject<HTMLElement>, range = 60) {
  const { scrollYProgress } = useScroll({ target: ref as unknown as RefObject<HTMLElement | null>, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, range])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, range / 10])
  return { y, rotate, scrollYProgress } as { y: MotionValue<number>; rotate: MotionValue<number>; scrollYProgress: MotionValue<number> }
}


