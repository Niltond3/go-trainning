import { LucideIcon } from 'lucide-react'
import { FormField, FormItem, FormLabel } from '@/components/ui/form'
import { UseControllerProps } from 'react-hook-form'

interface props extends UseControllerProps {
  Icon: LucideIcon
  children?: React.ReactNode
}

export default function TrainingCardContentItem({
  Icon,
  children,
  control,
  name,
}: props) {
  return (
    <FormField
      control={control}
      name={name}
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
