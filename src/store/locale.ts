// @ts-nocheck
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const localeStore = (set) => ({
  locale: 'en',
  country: {
    flag: 'https://res.cloudinary.com/eganow/image/upload/v1640022623/Flags/GH0233.png',
    code: 'GH0233',
    name: 'Ghana',
  },
  setLocale: (lang) => set(() => ({ locale: lang })),
  setCountry: (country) => set(() => ({ country: country })),
})

export const useLocale = create(
  persist(localeStore, {
    name: 'eganow-locale-storage', // name of the item in the storage (must be unique)
  }),
)
