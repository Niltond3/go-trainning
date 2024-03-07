import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import {
  Repeat1,
  Repeat2,
  Dumbbell,
  Gauge,
  Group,
  TimerReset,
} from 'lucide-react'
import { TrainingCard } from './TrainingCard/index'

export default function Body() {
  return (
    <Accordion type="multiple" className="p-5">
      <AccordionItem value="item-1" className="border-gray">
        <AccordionTrigger className="text-gray">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          <TrainingCard.Root>
            <TrainingCard.Item Icon={Repeat1}>
              <TrainingCard.Input placeholder="Nº de séries"></TrainingCard.Input>
            </TrainingCard.Item>
            <TrainingCard.Item Icon={Repeat2}>
              <TrainingCard.Input placeholder="Nº de reps"></TrainingCard.Input>
            </TrainingCard.Item>
            <TrainingCard.Item Icon={Dumbbell}>
              <TrainingCard.Input placeholder="Peso"></TrainingCard.Input>
            </TrainingCard.Item>
            <TrainingCard.Item Icon={Gauge}>
              <TrainingCard.Input placeholder="Técnica avançada"></TrainingCard.Input>
            </TrainingCard.Item>
            <TrainingCard.Item Icon={TimerReset}>
              <TrainingCard.Timer></TrainingCard.Timer>
            </TrainingCard.Item>
            <TrainingCard.Item Icon={Group}>
              <TrainingCard.Input placeholder="Grupo muscular"></TrainingCard.Input>
            </TrainingCard.Item>
          </TrainingCard.Root>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
