import { LucideIcon } from 'lucide-react'

interface props {
  Icon: LucideIcon, 
  children?: React.ReactNode
}

export default function TrainningCardContentItem({Icon, children}:props) {

  return (
    <div className='flex gap-1 text-orange'>
      <Icon/>
      {children}
  </div>
  )
}