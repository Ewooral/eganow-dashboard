import { CCardTitle, CCol, CPlaceholder, CRow } from '@coreui/react-pro'
import React from 'react'

function Placeholder() {
  return (
    <div>
      <CRow className="mb-4 px-4">
        <CCol xs={12} sm={6}>
          <fieldset className="p-3 border border-2 dark:border-white">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Email</legend>
            <CPlaceholder component={CCardTitle} animation="glow">
              <CPlaceholder xs={4} className="rounded bg-secondary" />
            </CPlaceholder>

            <CPlaceholder component={CCardTitle} animation="glow">
              <CPlaceholder xs={6} className="rounded bg-secondary m-0 p-0" />
            </CPlaceholder>
          </fieldset>

          <br />
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Business Details</legend>
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
          </fieldset>
        </CCol>

        <CCol xs={12} sm={6}>
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">Tax Details</legend>
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
          </fieldset>
          <br />
          <fieldset className="p-3 border border-2">
            <legend className="fs-6 float-none w-auto px-2 text-primary">License Details</legend>
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
          </fieldset>
        </CCol>
      </CRow>
    </div>
  )
}

export default Placeholder
