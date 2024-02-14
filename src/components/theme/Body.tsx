import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import {TrainningCard} from './TrainningCard/index'

export default function Body() {
  return (
  <Accordion type="multiple" className='p-5'>
    <AccordionItem value="item-1" className='border-gray'>
      <AccordionTrigger className='text-gray'>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        <TrainningCard.Root/>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}
