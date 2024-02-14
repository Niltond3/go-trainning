import { Input } from '@/components/ui/input'
import { LucideIcon } from 'lucide-react'
import React from 'react'

export default function TrainningCardContentItem({Icon,placeholder}:{Icon: LucideIcon, placeholder: string}) {
  return (
    <div className='flex gap-1 text-orange'>
      <Icon/>
      <Input placeholder={placeholder} className='text-gray'/>
  </div>
  )
}