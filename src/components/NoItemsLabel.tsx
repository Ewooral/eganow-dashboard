import { cilBurn } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CAlert, CButton } from '@coreui/react-pro'

const NoItemsLabel = (props: { onMouseUp: React.MouseEvent<HTMLButtonElement> }) => {
  return (
    <CAlert color="danger" className="d-flex align-items-center m-0 rounded-0">
      <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
      <div className="me-3">No record found.</div>
      {/* {typeof props.onMouseUp === 'function' ? (
        <CButton id="new" variant="outline" color="danger" onMouseUp={props.onMouseUp}>
          Add new
        </CButton>
      ) : null} */}
    </CAlert>
  )
}

export default NoItemsLabel
