// @ts-nocheck
import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
/* ************************************************************************************************* */
const uiDefault: UIDataType = {
  sidebarShow: true,
  sidebarUnfoldable: false,
  asideShow: false,
  theme: 'light',
}

const ui = (set) => ({
  ...uiDefault,

  setUnfordable: (data: Pick<UIDataType, 'sidebarUnfoldable'>) =>
    set(() => ({ sidebarUnfoldable: data })),
  setSidebarShow: (data: Pick<UIDataType, 'sidebarShow'>) => set(() => ({ sidebarShow: data })),
  setAsideShow: (data: Pick<UIDataType, 'asideShow'>) => set(() => ({ asideShow: data })),
  setTheme: (type: Pick<UIDataType, 'theme'>) => set(() => ({ theme: type })),
})

const myMiddlewares = (f) => devtools(persist(f, { name: 'eganow-v2-ui-store' }))

export const useUI = create(myMiddlewares(ui))
/* ************************************************************************************************* */

