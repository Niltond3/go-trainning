import { CardContent } from '@/components/ui/card'
import React from 'react'

type TrainingCardContentProps = {
  children?: React.ReactNode
}
export default function TrainingCardContent({
  children,
}: TrainingCardContentProps) {
  return (
    <CardContent className="grid grid-cols-2 gap-1">{children}</CardContent>
  )
}
