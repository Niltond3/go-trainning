import React from 'react'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex h-fit w-screen justify-between bg-blacked-md p-5">
      <div className="flex w-5/6 flex-col text-sm">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-gray">
          Treino A: peito, ombro, tríceps, panturrilhas
        </span>
        <span className="text-orange">Hoje, dia 13, terça-feira </span>
      </div>
      <Button className="rounded-full p-0 text-blacked-md opacity-50 transition-all hover:opacity-80 active:opacity-100">
        <PlusIcon className="h-10 w-10 rounded-full bg-orange " />
      </Button>
    </div>
  )
}
