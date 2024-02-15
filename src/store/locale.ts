// @ts-nocheck
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const localeStore = (set) => ({
  locale: 'en',
  setLocale: (lang) => set(() => ({ locale: lang })),
})

export const useLocale = create(
  persist(localeStore, {
    name: 'eganow-locale-storage', // name of the item in the storage (must be unique)
  }),
)
