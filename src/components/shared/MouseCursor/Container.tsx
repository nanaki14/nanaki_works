import { FC, useCallback, useEffect, useMemo, useRef } from 'react'
import gsap, { TimelineMax, Power3 } from 'gsap'
import { Component } from './Component'
import { environments } from '@/environments'

export type ContainerProps = {
  className?: string
}

export const Container: FC<ContainerProps> = ({ ...props }) => {
  const wrapperRef = useRef<globalThis.HTMLDivElement>(null)
  const innerRef = useRef<globalThis.HTMLDivElement>(null)

  const handleMove = useCallback(
    (e: globalThis.MouseEvent) => {
      requestAnimationFrame(() => {
        gsap.to(wrapperRef.current, 0.6, {
          top: e.clientY,
          left: e.clientX,
          x: '-50%',
          y: '-50%',
          ease: Power3.easeOut,
        })
        gsap.to(innerRef.current, 0, {
          top: e.clientY,
          left: e.clientX,
          x: '-50%',
          y: '-50%',
        })
      })
    },
    [wrapperRef, innerRef]
  )

  useEffect(() => {
    if (!environments.isServer) {
      window.addEventListener('mousemove', handleMove)
    }

    return () => window.removeEventListener('mousemove', handleMove)
  }, [handleMove])

  return <Component {...props} {...{ wrapperRef, innerRef }} />
}
