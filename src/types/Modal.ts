export type Confirm = {
    data: object
    title?: string
    message: string
    onClick: (event: React.MouseEvent<HTMLInputElement>, data: object) => void
    modalClose: () => void
  }