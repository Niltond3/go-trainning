"use client";

import { KEY_VALUES } from "@/components/constants";
import { Button } from "@/components/ui/button";
import { FC, useCallback } from "react";
import {KeyType} from '@/types'
import { Delete } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


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
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  
  return (
    <Button
      className="transition-all rounded-full w-16 h-16 text-lg p-0 hover:bg-blacked-md/80 bg-blacked-md/50 active:bg-blacked-md"
      onClick={() => {
        console.log(value)
        const params = searchParams.toString()
        const getTimer = searchParams.get('timer')
        console.log(getTimer?.length)

        // const oldSearchParams = params ? '?'+params+'&' : '?'
        // const routerHistory = `${oldSearchParams}timer=${value}`
        if (!getTimer) router.push(pathname + '?' + createQueryString('timer', value))
        else if (getTimer.length < 6) router.push(pathname + '?' + createQueryString('timer', getTimer+value))
        // && 
        


      }}
    >
      {value === 'reset' ? <Delete/> : value}
    </Button>
  );
};

export { TrainningCardKeyboard };