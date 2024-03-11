'use client'

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
import { zodResolver } from '@hookform/resolvers/zod'
import { Control, FieldValues, Form, useForm } from 'react-hook-form'
import { z } from 'zod'
import { TrainingCard } from './TrainingCard/index'

const formSchema = z.object({
  setNumber: z.number().min(1).max(10),
})

export default function Body() {
  type formType = z.infer<typeof formSchema>

  // 1. Define your form.
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      setNumber: 1,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: formType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const control = form.control as unknown as Control<FieldValues>
  return (
    <Accordion type="multiple" className="p-5">
      <AccordionItem value="item-1" className="border-gray">
        <AccordionTrigger className="text-gray">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          <TrainingCard.Root>
            <TrainingCard.Content>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <TrainingCard.Item
                    Icon={Repeat1}
                    control={control}
                    name="sets"
                  >
                    <TrainingCard.Input placeholder="Nº de séries"></TrainingCard.Input>
                  </TrainingCard.Item>
                  <TrainingCard.Item
                    Icon={Repeat2}
                    control={control}
                    name="reps"
                  >
                    <TrainingCard.Input placeholder="Nº de reps"></TrainingCard.Input>
                  </TrainingCard.Item>
                  <TrainingCard.Item
                    Icon={Dumbbell}
                    control={control}
                    name="weight"
                  >
                    <TrainingCard.Input placeholder="Peso"></TrainingCard.Input>
                  </TrainingCard.Item>
                  <TrainingCard.Item
                    Icon={Gauge}
                    control={control}
                    name="advanced"
                  >
                    <TrainingCard.Input placeholder="Técnica avançada"></TrainingCard.Input>
                  </TrainingCard.Item>
                  <TrainingCard.Item
                    Icon={TimerReset}
                    control={control}
                    name="timer"
                  >
                    <TrainingCard.Timer></TrainingCard.Timer>
                  </TrainingCard.Item>
                  <TrainingCard.Item
                    Icon={Group}
                    control={control}
                    name="group"
                  >
                    <TrainingCard.Input placeholder="Grupo muscular"></TrainingCard.Input>
                  </TrainingCard.Item>
                </form>
              </Form>
            </TrainingCard.Content>
          </TrainingCard.Root>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
