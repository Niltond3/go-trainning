'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Check, Trash2 } from 'lucide-react'
import { TrainingCardKeyboard } from './TrainingCardTimerKeyboard'
import useRouterTimer from '../Hooks'
import React, { useState } from 'react'
import TrainingCardInput from '../TrainingCardInput'

const TrainingCardTimer = React.forwardRef<HTMLInputElement>(
  ({ ...rest }, ref) => {
    const {
      getTimer: { min, seconds },
      setTimer: { byKeyDown, erase },
    } = useRouterTimer()

    const [timer, setThisTimer] = useState('--:--')

    const handleAcceptTimer = () => setThisTimer(`${min}:${seconds}`)

    return (
      <Dialog onOpenChange={() => erase()}>
        <DialogTrigger asChild>
          <TrainingCardInput placeholder={timer} ref={ref} {...rest} />
        </DialogTrigger>
        <DialogContent
          className="border-none bg-background-md focus-visible:outline-none sm:max-w-[425px]"
          onKeyDown={(e) => byKeyDown(e, handleAcceptTimer)}
        >
          <DialogHeader className="text-left ">
            <DialogTitle className="text-hard-Gray">Timer</DialogTitle>
            <DialogDescription className="text-center text-gray">
              <span className={min !== '00' ? 'text-orange' : ''}>{min}m </span>
              <span className={seconds !== '00' ? 'text-orange' : ''}>
                {seconds}s
              </span>
            </DialogDescription>
          </DialogHeader>
          <TrainingCardKeyboard />
          <DialogFooter className="relative flex flex-row">
            <Button
              onClick={erase}
              type="reset"
              className="h-10 w-10 rounded-full bg-blacked-md/50 p-0 hover:bg-blacked-md/80 active:bg-blacked-md"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleAcceptTimer}
              type="submit"
              className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blacked-md/50 p-0 hover:bg-blacked-md/80 active:bg-blacked-md"
            >
              <Check />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
)

TrainingCardTimer.displayName = 'TrainingCardTimer'
export default TrainingCardTimer

// export default function TrainingCardTimer({ ...rest }) {
//   const {
//     getTimer: { min, seconds },
//     setTimer: { byKeyDown, erase },
//   } = useRouterTimer()

//   const [timer, setThisTimer] = useState('--:--')

//   const handleAcceptTimer = () => setThisTimer(`${min}:${seconds}`)

//   return (
//     <Dialog onOpenChange={() => erase()}>
//       <DialogTrigger asChild>
//         <TrainingCardInput value={timer} {...rest} />
//       </DialogTrigger>
//       <DialogContent
//         className="border-none bg-background-md focus-visible:outline-none sm:max-w-[425px]"
//         onKeyDown={(e) => byKeyDown(e, handleAcceptTimer)}
//       >
//         <DialogHeader className="text-left ">
//           <DialogTitle className="text-hard-Gray">Timer</DialogTitle>
//           <DialogDescription className="text-center text-gray">
//             <span className={min !== '00' ? 'text-orange' : ''}>{min}m </span>
//             <span className={seconds !== '00' ? 'text-orange' : ''}>
//               {seconds}s
//             </span>
//           </DialogDescription>
//         </DialogHeader>
//         <TrainingCardKeyboard />
//         <DialogFooter className="relative flex flex-row">
//           <Button
//             onClick={erase}
//             type="reset"
//             className="h-10 w-10 rounded-full bg-blacked-md/50 p-0 hover:bg-blacked-md/80 active:bg-blacked-md"
//           >
//             <Trash2 className="h-4 w-4" />
//           </Button>
//           <Button
//             onClick={handleAcceptTimer}
//             type="submit"
//             className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blacked-md/50 p-0 hover:bg-blacked-md/80 active:bg-blacked-md"
//           >
//             <Check />
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }
