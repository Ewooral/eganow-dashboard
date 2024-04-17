export type Confirm = {
    data: object
    message: string
    onClick: (event: React.MouseEvent<HTMLInputElement>, data: object) => void
    modalClose: () => void
  }