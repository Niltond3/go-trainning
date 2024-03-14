'use client'
import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSearchParams } from 'next/navigation'
import React from 'react'

interface ITrainingCardInput {
  placeholder?: string
}

const TrainingCardInput = React.forwardRef<
  HTMLInputElement,
  ITrainingCardInput
>(({ placeholder, ...rest }, ref) => {
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
        ref={ref}
        {...rest}
      />
    </FormControl>
  )
})

TrainingCardInput.displayName = 'TrainingCardInput'

export default TrainingCardInput

// export default function TrainingCardInput({
//   placeholder,
//   value,
//   ...rest
// }: ITrainingCardInput) {
//   const searchParams = useSearchParams()
//   const isDisabled = searchParams.has('editTraining', 'n')
//   const hasEdit = searchParams.get('editTraining')
//   return (
//     <FormControl>
//       <Input
//         disabled={!hasEdit ? true : isDisabled}
//         placeholder={placeholder}
//         className="text-gray"
//         value={value}
//         {...rest}
//       />
//     </FormControl>
//   )
// }
