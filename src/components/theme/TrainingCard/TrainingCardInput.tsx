'use client'
import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSearchParams } from 'next/navigation'

interface ITrainingCardInput {
  placeholder: string
}

export default function TrainingCardInput({
  placeholder,
  ...rest
}: ITrainingCardInput) {
  const searchParams = useSearchParams()
  const isDisabled = searchParams.has('editTraining', 'n')
  const hasEdit = searchParams.get('editTraining')
  console.log(rest)
  return (
    <FormControl>
      <Input
        disabled={!hasEdit ? true : isDisabled}
        placeholder={placeholder}
        className="text-gray"
        {...rest}
      />
    </FormControl>
  )
}
