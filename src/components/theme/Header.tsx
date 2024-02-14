import React from 'react'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'

export default function Header() {
  return (
    <div className='flex justify-between bg-blacked-md h-fit w-screen p-5'>
      <div className='flex flex-col text-sm w-5/6'>
        <span className='text-gray whitespace-nowrap overflow-hidden text-ellipsis'>Treino A: peito, ombro, tríceps, panturrilhas</span>
        <span className='text-orange'>Hoje, dia 13, terça-feira </span>
      </div>
      <Button className='text-blacked-md p-0 rounded-full opacity-50 hover:opacity-80 active:opacity-100 transition-all'>
        <PlusIcon className='bg-orange rounded-full w-10 h-10 '/>
      </Button>
    </div>
  )
}
