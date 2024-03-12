import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import React from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'

type TrainingCardContentProps<T extends FieldValues> = {
  children?: React.ReactNode
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined
  form: UseFormReturn<T>
}
export default function TrainingCardContent<T extends FieldValues>({
  children,
  handleSubmit,
  form,
}: TrainingCardContentProps<T>) {
  return (
    <CardContent>
      <Form {...form}>
        <form className="grid grid-cols-2 gap-1" onSubmit={handleSubmit}>
          {children}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </CardContent>
  )
}
