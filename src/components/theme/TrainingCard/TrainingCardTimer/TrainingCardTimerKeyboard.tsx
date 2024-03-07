import { KEY_VALUES } from '@/components/constants'
import { Button } from '@/components/ui/button'
import { FC } from 'react'
import { KeyType } from '@/types'
import { Delete } from 'lucide-react'
import useRouterTimer from '../Hooks'

const TrainingCardKeyboard = () => {
  return (
    <section className="grid w-full grid-cols-3 justify-items-center gap-2 rounded-xl p-4">
      {KEY_VALUES.map((value, index) => (
        <Key key={index} value={value} />
      ))}
      <button autoFocus={true} className="hidden" />
    </section>
  )
}

interface IKeyProps {
  value: KeyType
}

const Key: FC<IKeyProps> = ({ value }) => {
  const {
    setTimer: { byKeyPress },
  } = useRouterTimer()
  return (
    <Button
      className="h-16 w-16 rounded-full bg-blacked-md/50 p-0 text-lg transition-all hover:bg-blacked-md/80 active:bg-blacked-md"
      onClick={(e) => {
        e.preventDefault()
        if (e.clientX === 0) return
        byKeyPress(value)
      }}
      autoFocus={true}
    >
      {value === 'Backspace' ? <Delete /> : value}
    </Button>
  )
}

export { TrainingCardKeyboard }
