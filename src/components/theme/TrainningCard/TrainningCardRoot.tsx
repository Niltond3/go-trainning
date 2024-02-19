"use client"
import React, { useCallback } from 'react'
import { Card, CardHeader,CardTitle,CardContent } from '@/components/ui/card'
import {Repeat1, Repeat2, Dumbbell, Gauge, Group, TimerReset, Edit } from 'lucide-react'
import TrainningCardContentItem from './TrainningCardContentItem'
import { Button } from '@/components/ui/button'
import {useSearchParams, useRouter, usePathname} from 'next/navigation'
import { TrainningCard } from './'

export default function TrainningCardRoot() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const handleClick = () => {
    // <pathname>?editTrainning=y | <pathname>?editTrainning=n
    searchParams.get('editTrainning') === 'y' 
    ? router.push(pathname + '?' + createQueryString('editTrainning', 'n')) 
    : router.push(pathname + '?' + createQueryString('editTrainning', 'y'))
  }

  return (
    <Card className='bg-shape border-none'>
      <CardHeader className='justify-between items-center'>
        <CardTitle className='text-white'>Exercício</CardTitle>
        <Button className='rounded-full p-0 bg-transparent opacity-50 hover:opacity-80 hover:bg-transparent focus-visible:right-0 active:opacity-100' 
        onClick={handleClick}>
          <Edit className='rounded-full w-6 h-6'/>
        </Button>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-1'>
        <TrainningCardContentItem Icon={Repeat1} >
          <TrainningCard.Input placeholder='Nº de séries'></TrainningCard.Input>
        </TrainningCardContentItem>
        <TrainningCardContentItem Icon={Repeat2} >
          <TrainningCard.Input placeholder='Nº de reps'></TrainningCard.Input>
        </TrainningCardContentItem>
        <TrainningCardContentItem Icon={Dumbbell} >
          <TrainningCard.Input placeholder='Peso'></TrainningCard.Input>
        </TrainningCardContentItem>
        <TrainningCardContentItem Icon={Gauge} >
          <TrainningCard.Input placeholder='Técnica avançada'></TrainningCard.Input>
        </TrainningCardContentItem>
        <TrainningCardContentItem Icon={TimerReset} >
            <TrainningCard.Dialog></TrainningCard.Dialog>
        </TrainningCardContentItem>
        <TrainningCardContentItem Icon={Group} >
          <TrainningCard.Input placeholder='Grupo muscular'></TrainningCard.Input>
        </TrainningCardContentItem>
      </CardContent>
  </Card>
  )
}




