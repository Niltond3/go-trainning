'use client'
import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSearchParams } from 'next/navigation'

export default function TrainingCardInput({
  placeholder,
}: {
  placeholder: string
}) {
  const searchParams = useSearchParams()
  const isDisabled = searchParams.has('editTraining', 'n')
  const hasEdit = searchParams.get('editTraining')

  return (
    <FormControl>
      <Input
        disabled={!hasEdit ? true : isDisabled}
        placeholder={placeholder}
        className="text-gray"
      />
    </FormControl>
  )
}
