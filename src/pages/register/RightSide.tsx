import CIcon from '@coreui/icons-react'
import { cilBurn } from '@coreui/icons'
import { CAlert } from '@coreui/react-pro'

type progressBar = {
  title: string
  content: string
  component?: HTMLPreElement
}

type LeftSideProps = {
  stepCount: number
  stepList: progressBar[]
}
const RightSide = (props: LeftSideProps) => {
  return (
    <div className="right-side">
      <div className="main">
        <CAlert color="danger" className="d-flex align-items-center mt-4 d-none">
          <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
          <div>An example danger alert with an icon</div>
        </CAlert>
        {props.stepList[props.stepCount].component}
        {/*  */}
      </div>
    </div>
  )
}

export default RightSide
