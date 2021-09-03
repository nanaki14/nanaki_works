import { Suspense, useRef, VFC } from 'react'
import { Vector2 } from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContainerProps } from './Container'

// @ts-ignore
import vertexShader from '@/shaders/vertex.vert'
// @ts-ignore
import fragmentShader from '@/shaders/fragment.frag'

type Props = {} & ContainerProps

const Plane = () => {
  const ref = useRef()
  const { mouse, size } = useThree()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    ;(ref.current as any).material.uniforms.time.value = time
    ;(ref.current as any).material.uniforms.mouse.value = new Vector2(
      mouse.x,
      mouse.y
    )
  })

  const PurpleShader = {
    uniforms: {
      time: { type: 'f', value: 1.0 },
      resolution: {
        type: 'fv2',
        value: new Vector2(size.width, size.height),
      },
      mouse: {
        type: 'fv2',
        value: new Vector2(mouse.x, mouse.y),
      },
    },
    vertexShader,
    fragmentShader,
  }

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <shaderMaterial attach="material" args={[PurpleShader]} />
    </mesh>
  )
}

export const Component: VFC<Props> = () => {
  return (
    <div className="fixed inset-0">
      <Canvas
        camera={{ position: [-1, 1, 1], near: 0.01, far: 10000, fov: 60 }}
      >
        <ambientLight intensity={0.85} />
        <Suspense fallback={null}>
          <Plane />
        </Suspense>
      </Canvas>
    </div>
  )
}
