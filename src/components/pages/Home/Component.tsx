import { FC } from 'react'
import { ContainerProps } from './Container'
import { TopHero } from '@/components/shared/TopHero'

type Props = {} & ContainerProps

export const Component: FC<Props> = () => {
  return (
    <div className="h-full">
      <TopHero />
    </div>
  )
}
