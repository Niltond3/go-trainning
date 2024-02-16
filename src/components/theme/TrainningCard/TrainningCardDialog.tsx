import { KEY_VALUES } from "@/components/constants"
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
 
export default function TrainningCardDialog() {

  const keyDownEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const mapKeyboardPress = {
      0: () => console.log(e.key),
      1: () => console.log(e.key),
      2: () => console.log(e.key),
      3: () => console.log(e.key),
      4: () => console.log(e.key),
      5: () => console.log(e.key),
      6: () => console.log(e.key),
      7: () => console.log(e.key),
      8: () => console.log(e.key),
      9: () => console.log(e.key),
      'Enter': () => console.log(e.key),
      'Backspace': () => console.log(e.key),
    }
    const key = e.key as keyof typeof mapKeyboardPress
    if (mapKeyboardPress[key]) mapKeyboardPress[key]()
  }

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="ghost" >--:--</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background-md border-none focus-visible:outline-none" onKeyDown={keyDownEvent}>
        <DialogHeader className="text-left ">
          <DialogTitle className="text-hard-Gray">Timer</DialogTitle>
          <DialogDescription className="text-center text-gray">
            {`00h 00m 00s`}
          </DialogDescription>
        </DialogHeader>
          <TrainningCardKeyboard/>
        <DialogFooter className="flex flex-row relative">
          <Button type="reset" className="rounded-full w-10 h-10 p-0 hover:bg-blacked-md/80 bg-blacked-md/50 active:bg-blacked-md">
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