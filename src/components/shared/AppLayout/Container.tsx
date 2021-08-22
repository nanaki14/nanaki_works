import { FC } from 'react'
import { Component } from './Component'

export type ContainerProps = {
  className?: string
}

export const Container: FC<ContainerProps> = ({ ...props }) => {
  return <Component {...props} />
}
