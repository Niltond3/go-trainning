import { Input } from '@/components/ui/input'
import {useSearchParams} from 'next/navigation'

export default function TrainningCardInput({placeholder}:{placeholder:string}) {
  const searchParams = useSearchParams()
  const isDisabled = searchParams.has('editTrainning','n')
  const hasEdit = searchParams.get('editTrainning')

  return (
    <>
      <Input disabled={!hasEdit ? true : isDisabled} placeholder={placeholder} className='text-gray'/>
    </>
  )
}
