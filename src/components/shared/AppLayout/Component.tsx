import { FC } from 'react'
import { BgCanvas } from '../BgCanvas'
import { ContainerProps } from './Container'

type Props = {} & ContainerProps

export const Component: FC<Props> = (props) => {
  return (
    <div className="">
      <BgCanvas />
      {props.children}
    </div>
  )
}
