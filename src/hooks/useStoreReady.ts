// @ts-nocheck
import { useState, useEffect } from 'react'
import { useUI } from '@/store'

export default function useStoreReady() {
  const [state, setState] = useState(false)
  const theme = useUI((state) => state.theme)

  useEffect(() => {
    setState(true)
  }, [theme])

  return state
}
