
import { KEY_VALUES } from "@/components/constants";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import {KeyType} from '@/types'
import { Delete } from "lucide-react";
import useRouterTimer from "./Hooks";


const TrainningCardKeyboard = () => {
  return (
    <section className="grid grid-cols-3 justify-items-center gap-2 p-4 w-full rounded-xl">
      {KEY_VALUES.map((value, index) => (
        <Key key={index} value={value} />
      ))}
    </section>
  );
};

interface IKeyProps {
  value: KeyType;
}

const Key: FC<IKeyProps> = ({ value }) => {
  const {setTimer:{byKeyPress}} =  useRouterTimer()
  return (
    <Button
      className="transition-all rounded-full w-16 h-16 text-lg p-0 hover:bg-blacked-md/80 bg-blacked-md/50 active:bg-blacked-md"
      onClick={() => byKeyPress(value)}
    >
      {value === 'Backspace' ? <Delete/> : value}
    </Button>
  );
};

export { TrainningCardKeyboard };