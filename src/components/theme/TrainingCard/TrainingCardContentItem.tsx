import { LucideIcon } from 'lucide-react'
import { FormField, FormItem, FormLabel } from '@/components/ui/form'
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseControllerProps,
  UseFormStateReturn,
} from 'react-hook-form'

interface props extends UseControllerProps {
  Icon: LucideIcon
  children?: React.ReactNode
  render: (field: {
    field: ControllerRenderProps<FieldValues, string>
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<FieldValues>
  }) => React.ReactNode
}

export default function TrainingCardContentItem({
  Icon,
  control,
  name,
  render,
}: props) {
  return (
    <FormField
      control={control}
      name={name}
      render={(field) => (
        <FormItem className="flex gap-1 text-orange">
          <FormLabel>
            <Icon />
          </FormLabel>
          {render(field)}
        </FormItem>
      )}
    />
  )
}
