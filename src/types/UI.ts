export type UIDataType = {
  sidebarShow: boolean
  sidebarUnfoldable: boolean
  asideShow: boolean
  theme: 'dark' | 'light'
}

export type SnackbarDataType = {
  type: 'primary' | 'success' | 'warning' | 'danger'
  title: string
  messages: string
  show: boolean
}
