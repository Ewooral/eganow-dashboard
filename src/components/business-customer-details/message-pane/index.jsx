// @ts-nocheck
import {
  CCol,
  CRow,
  CFormLabel,
  CFormInput,
  CDatePicker,
  CLoadingButton,
  CFooter,
  CFormTextarea,
  CForm,
} from '@coreui/react-pro'
/*
 *
 * Message Component
 *
 */
const Message = (props) => {
  /* *************************************************************************************** */

  return (
    <CForm className="px-4">
      <CRow className="mb-4">
        <CCol>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">
              Message for Customers
            </legend>
            <CFormLabel htmlFor="postalAddress" className="form-label mt-3">
              <strong>Message</strong>
            </CFormLabel>
            <CFormTextarea id="postalAddress" rows={6} disabled></CFormTextarea>
          </fieldset>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default Message
