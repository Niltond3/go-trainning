'use client'
import React, { useCallback } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

type TrainingCardRootProps = {
  children: React.ReactNode
}

export default function TrainingCardRoot({ children }: TrainingCardRootProps) {
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
      {children}
    </Card>
  )
}
