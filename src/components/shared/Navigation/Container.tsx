import gsap, { Linear } from 'gsap'
import { useEffect, useRef, VFC } from 'react'
import { Component } from './Component'

export type ContainerProps = {
  className?: string
}

export const Container: VFC<ContainerProps> = ({ ...props }) => {
  const logoWrapperRef = useRef<globalThis.HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(logoWrapperRef.current, 8, {
      rotation: 360,
      ease: Linear.easeNone,
      repeat: -1,
    })
  }, [])

  return <Component {...props} {...{ logoWrapperRef }} />
}
