export type StepPropType = {
  formState: {
    errors: {
      emailAddress: String[]
      otpValue: String[]
      firstName: String[]
      lastName: String[]
      mobileNumber: String[]
      language: String[]
      confirmPassword: String[]
      countryCode: String[]
      securityQuestionOne: String[]
      securityAnswerOne: String[]
      securityQuestionTwo: String[]
      securityAnswerTwo: String[]
    }
    dirtyFields: {
      emailAddress: String[]
      otpValue: String[]
      firstName: String[]
      lastName: String[]
      mobileNumber: String[]
      language: String[]
      confirmPassword: String[]
      countryCode: String[]
      securityQuestionOne: String[]
      securityAnswerOne: String[]
      securityQuestionTwo: String[]
      securityAnswerTwo: String[]
    }
  }
  register: Function
  getValues: Function
  handleNextClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  handleBackClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}
