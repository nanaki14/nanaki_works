import { Suspense, useRef, VFC } from 'react'
import { Vector2 } from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import gsap, { Power3 } from 'gsap'
import { ContainerProps } from './Container'

// @ts-ignore
import vertexShader from '@/shaders/vertex.vert'
// @ts-ignore
import fragmentShader from '@/shaders/fragment.frag'
import { useSelector } from '@/store'

type Props = {} & ContainerProps

const mousePosition = {
  xValue: 0,
  yValue: 0,
}

const Plane = (props: { circleSize: number }) => {
  const ref = useRef()
  const { mouse, size } = useThree()
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    ;(ref.current as any).material.uniforms.time.value = time
    gsap.to(mousePosition, 2, {
      xValue: mouse.x,
      yValue: mouse.y,
      overwrite: true,
      ease: Power3.easeOut,
    })
    ;(ref.current as any).material.uniforms.mouse.value = new Vector2(
      mousePosition.xValue,
      mousePosition.yValue
    )
  })

  const PurpleShader = {
    uniforms: {
      time: { type: 'f', value: 1.0 },
      circleSize: { type: 'f', value: props.circleSize },
      resolution: {
        type: 'fv2',
        value: new Vector2(size.width, size.height),
      },
      mouse: {
        type: 'fv2',
        value: new Vector2(mousePosition.xValue, mousePosition.yValue),
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
  const circleSize = useSelector((state) => state.canvas.circleSize)
  return (
    <div className="fixed inset-0">
      <Canvas
        camera={{ position: [-1, 1, 1], near: 0.01, far: 10000, fov: 60 }}
      >
        <ambientLight intensity={0.85} />
        <Suspense fallback={null}>
          <Plane circleSize={circleSize} />
        </Suspense>
      </Canvas>
    </div>
  )
}
