import { useEffect, useMemo, VFC } from 'react'
import { GUI } from 'dat.gui'
import { useDispatch } from 'react-redux'
import { Component } from './Component'
import { useSelector } from '@/store'
import { canvasActions } from '@/store/modules/canvas'

export type ContainerProps = {
  className?: string
}

export const Container: VFC<ContainerProps> = ({ ...props }) => {
  const dispatch = useDispatch()
  const circleSize = useSelector((state) => state.canvas.circleSize)

  const gui = useMemo(() => new GUI(), [])

  useEffect(() => {
    gui
      .add({ circleSize }, 'circleSize')
      .min(0)
      .max(1)
      .step(0.05)
      .onChange((value) => dispatch(canvasActions.changeBgCircleSize(value)))

    return () => gui.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Component {...props} {...{ circleSize }} />
}
