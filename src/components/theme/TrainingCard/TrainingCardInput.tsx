'use client'
import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSearchParams } from 'next/navigation'

interface ITrainingCardInput {
  placeholder?: string
  value?: string | number | readonly string[]
}

export default function TrainingCardInput({
  placeholder,
  value,
  ...rest
}: ITrainingCardInput) {
  const searchParams = useSearchParams()
  const isDisabled = searchParams.has('editTraining', 'n')
  const hasEdit = searchParams.get('editTraining')
  return (
    <FormControl>
      <Input
        disabled={!hasEdit ? true : isDisabled}
        placeholder={placeholder}
        className="text-gray"
        value={value}
        {...rest}
      />
    </FormControl>
  )
}
