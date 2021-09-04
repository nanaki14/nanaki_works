import { FC } from 'react'
import { BgCanvas } from '../BgCanvas'
import { Navigation } from '../Navigation'
import { ContainerProps } from './Container'

type Props = {} & ContainerProps

export const Component: FC<Props> = (props) => {
  return (
    <div>
      <BgCanvas />
      <div className="relative">{props.children}</div>
      <Navigation />
    </div>
  )
}
