import { CCard, CCardTitle, CCol, CPlaceholder, CRow } from '@coreui/react-pro'
import React from 'react'

function Placeholder() {
  return (
    <div>
      <CRow className="mb-4 px-4">
        <CCol xs={12} sm={6}>
          <CCard className="p-3 border shadow-none">
            <strong className="= float-none w-auto  m-0 ">Email</strong>
            <hr className="my-3" />

            <CPlaceholder component={CCardTitle} animation="glow">
              <CPlaceholder xs={4} className="rounded bg-secondary" />
            </CPlaceholder>

            <CPlaceholder component={CCardTitle} animation="glow">
              <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
            </CPlaceholder>
          </CCard>

          <br />
          <CCard className="p-3 border shadow-none">
            <strong className="= float-none w-auto  m-0 ">Business Details</strong>
            <hr className="my-3" />

            <CCol xs={12}>
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>

            <CCol xs={12} className="mt-3">
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>

            <CCol xs={12} className="mt-3">
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>

            <CCol xs={12} className="mt-3">
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>

            <CCol xs={12} className="mt-3">
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>

            <CCol xs={12} className="mt-3">
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>
          </CCard>
        </CCol>

        <CCol xs={12} sm={6}>
          <CCard className="p-3 border shadow-none">
            <strong className="float-none w-auto  m-0">Tax Details</strong>
            <hr className="my-3" />

            <CCol xs={12}>
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>

            <CCol xs={12} className="mt-3">
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>
          </CCard>
          <br />
          <CCard className="p-3 border shadow-none">
            <strong className="float-none w-auto  m-0">License Details</strong>
            <hr className="my-3" />

            <CCol xs={12}>
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>

            <CCol xs={12} className="mt-3">
              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={4} className="rounded bg-secondary" />
              </CPlaceholder>

              <CPlaceholder component={CCardTitle} animation="glow">
                <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
              </CPlaceholder>
            </CCol>

            <CRow className=" mt-3">
              <CCol xs={12} sm={6}>
                <CPlaceholder component={CCardTitle} animation="glow">
                  <CPlaceholder xs={4} className="rounded bg-secondary" />
                </CPlaceholder>

                <CPlaceholder component={CCardTitle} animation="glow">
                  <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
                </CPlaceholder>
              </CCol>
              <CCol xs={12} sm={6}>
                <CPlaceholder component={CCardTitle} animation="glow">
                  <CPlaceholder xs={4} className="rounded bg-secondary" />
                </CPlaceholder>

                <CPlaceholder component={CCardTitle} animation="glow">
                  <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
                </CPlaceholder>
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Placeholder
