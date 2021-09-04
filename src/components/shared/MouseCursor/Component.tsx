import { FC, RefObject } from 'react'
import { ContainerProps } from './Container'

type Props = {
  wrapperRef: RefObject<globalThis.HTMLDivElement>
  innerRef: RefObject<globalThis.HTMLDivElement>
} & ContainerProps

export const Component: FC<Props> = (props) => {
  return (
    <>
      <div
        ref={props.wrapperRef}
        className="fixed w-12 h-12 rounded-full pointer-events-none bg-light-10"
        style={{ willChange: 'transform' }}
      ></div>
      <div
        ref={props.innerRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none bg-light-100"
      />
    </>
  )
}
