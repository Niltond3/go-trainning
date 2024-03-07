import { LucideIcon } from 'lucide-react'
import { FormField, FormItem, FormLabel } from '@/components/ui/form'

interface props {
  Icon: LucideIcon
  children?: React.ReactNode
}

export default function TrainingCardContentItem({ Icon, children }: props) {
  return (
    <FormField
      control={}
      name={}
      render={() => (
        <FormItem className="flex gap-1 text-orange">
          <FormLabel>
            <Icon />
          </FormLabel>
          {children}
        </FormItem>
      )}
    />
  )
}
