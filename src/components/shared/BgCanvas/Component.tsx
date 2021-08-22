import { VFC } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContainerProps } from './Container'

type Props = {} & ContainerProps

export const Component: VFC<Props> = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
