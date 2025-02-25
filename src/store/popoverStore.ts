import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const usePopoverStore = create(
  persist(
    (set) => ({
      dontShowAgain: false,
      setDontShowAgain: (value: any) => set({ dontShowAgain: value }),
    }),
    {
      name: 'onboarding-popover-storage', // unique storage key
    }
  )
)

export default usePopoverStore
