export type countryOptionType = {
    countryflagurl: string
    countryname: string
    countrydialcode: string
}

export type countryPropsType = {
<<<<<<< Updated upstream
    name: string
    handleForm: string[]
    countrydialcode: string
    shouldValidate: boolean
    className: string
  }
=======
  name: string
  handleForm: string[]
  countrydialcode: string
  shouldValidate: boolean
  className: string
}
>>>>>>> Stashed changes

export type progressBar = {
    title: string
    content: string
    component?: HTMLPreElement
  }

export type LeftSideProps = {
    stepCount: number
    stepList: progressBar[]
}


export type  ProgressBar = {
  title: string;
  content: string;
  component: JSX.Element;
}[]