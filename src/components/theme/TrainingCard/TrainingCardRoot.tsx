'use client'
import React, { useCallback } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'

export default function TrainingCardRoot({
  children,
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const formSchema = z.object({
    setNumber: z.number().min(1).max(10),
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      setNumber: 1,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const handleClick = () => {
    // <pathname>?editTraining=y | <pathname>?editTraining=n
    searchParams.get('editTraining') === 'y'
      ? router.push(pathname + '?' + createQueryString('editTraining', 'n'))
      : router.push(pathname + '?' + createQueryString('editTraining', 'y'))
  }

  return (
    <Card className="border-none bg-shape">
      <CardHeader className="items-center justify-between">
        <CardTitle className="text-white">Exercício</CardTitle>
        <Button
          className="rounded-full bg-transparent p-0 opacity-50 hover:bg-transparent hover:opacity-80 focus-visible:right-0 active:opacity-100"
          onClick={handleClick}
        >
          <Edit className="h-6 w-6 rounded-full" />
        </Button>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid grid-cols-2 gap-1">
            {children}
          </CardContent>
        </form>
      </Form>
    </Card>
  )
}
