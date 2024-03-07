'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { KeyType } from '@/types'

export default function useRouterTimer() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const routerPushTimer = (value: string) =>
    router.push(pathname + '?' + createQueryString('timer', value))

  const routerTimer = (value: KeyType) => {
    const getTimer = searchParams.get('timer')

    if (!getTimer && value !== '0' && value !== '00' && value !== 'Backspace')
      return routerPushTimer(value)

    if (
      getTimer &&
      getTimer.length < 4 &&
      getTimer.length > 0 &&
      value !== 'Backspace'
    )
      return routerPushTimer(getTimer + value)

    if (value === 'Backspace' && getTimer!.length > 0)
      return routerPushTimer(getTimer!.slice(0, -1))
  }

  const keyDownEvent = (
    e: React.KeyboardEvent<HTMLDivElement>,
    callback: () => void,
  ) => {
    const isNumber = () => !isNaN(e.key as unknown as number)
    const mapKeyboardPress = {
      default: () => routerTimer(e.key as KeyType),
      Enter: () => callback(),
      Backspace: () => routerTimer(e.key as KeyType),
      Delete: () => routerPushTimer(''),
    }

    const key = (
      isNumber() ? 'default' : e.key
    ) as keyof typeof mapKeyboardPress
    if (mapKeyboardPress[key]) mapKeyboardPress[key]()
  }

  const getTimerFormat = (length: 3 | 1) => {
    const timer = searchParams.get('timer')
    if (timer !== null) {
      const mapLength = {
        3: {
          first: '0' + timer.slice(0, 1),
          second: timer.slice(0, 2),
        },
        1: {
          first: '0' + timer,
          second: timer.slice(-2),
        },
      }
      if (timer.length < length) return '00'
      if (timer.length === length) return mapLength[length].first
      return mapLength[length].second
    }
    return '00'
  }

  const getTimer = {
    min: getTimerFormat(3),
    seconds: getTimerFormat(1),
  }

  const erase = () => routerPushTimer('')

  const setTimer = {
    byKeyDown: keyDownEvent,
    byKeyPress: routerTimer,
    erase,
  }

  return {
    getTimer,
    setTimer,
  }
}
