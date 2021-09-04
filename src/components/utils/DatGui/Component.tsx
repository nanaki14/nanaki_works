import { VFC } from 'react'
import { ContainerProps } from './Container'

type Props = { circleSize: number } & ContainerProps

export const Component: VFC<Props> = () => {
  return <>{/* <p>{props.circleSize}</p> */}</>
}
