import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Check, Trash2 } from "lucide-react"
import { TrainningCardKeyboard } from "./TrainningCardKeyboard"
import useRouterTimer from "./Hooks"
 
export default function TrainningCardDialog() {
  const {getTimer:{
    minuts,seconds
  },setTimer:{
    byKeyDown
  }
} = useRouterTimer()

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="ghost" >--:--</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background-md border-none focus-visible:outline-none" onKeyDown={byKeyDown}>
        <DialogHeader className="text-left ">
          <DialogTitle className="text-hard-Gray">Timer</DialogTitle>
          <DialogDescription className="text-center text-gray">
            <span className={minuts !== '00' ? 'text-orange' : ''}>{minuts}m </span>
            <span className={seconds !== '00' ? 'text-orange' : ''}>{seconds}s</span>
          </DialogDescription>
        </DialogHeader>
          <TrainningCardKeyboard/>
        <DialogFooter className="flex flex-row relative">
          <Button type="reset" className="rounded-full w-10 h-10 p-0 hover:bg-blacked-md/80 bg-blacked-md/50 active:bg-blacked-md" >
            <Trash2 className="w-4 h-4"/>
          </Button>
          <Button type="submit" className="absolute w-16 h-16 p-0 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-blacked-md/80 bg-blacked-md/50 active:bg-blacked-md">
            <Check/>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}