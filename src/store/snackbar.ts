// @ts-nocheck
import { create } from 'zustand'

const snackbarDefault: SnackbarDataType = {
  type: 'primary',
  title: '',
  messages: '',
  show: false,
}

export const useSnackbar = create((set) => ({
  data: snackbarDefault,

  showSnackbar: (data: SnackbarDataType) => set(() => ({ data: data })),
  closeSnackbar: () => set(() => ({ data: snackbarDefault })),
}))
