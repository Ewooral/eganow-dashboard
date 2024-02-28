// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useController } from 'react-hook-form'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilGlobeAlt } from '@coreui/icons'
/* API */
import sharedServiceGRPC from '@/api/sharedServiceGRPC'
/* USE_QUERY */
import { useQuery } from '@tanstack/react-query'
import Each from '@/components/Each'

// COUNTRY TYPE
import { countryOptionType } from '@/types/CommonDataType'


const DialCode = (props: any) => {
  const { field, fieldState } = useController({
    name: props.name,
    control: props.handleForm.control,
  })
  //Fetching country options
  const { getCountries } = sharedServiceGRPC()
  //Fetching API
  const { error, data } = useQuery({
    queryKey: ['countryData'],
    queryFn: () => getCountries({ countryFilter: 'COUNTRY_FILTER_SIGNUP' }),
    staleTime: 5000,
  })

 
  function handleFlagChange(event) {
    const { id, value, dataset } = event.target

    if (dataset.name === 'flag') {
      const obj = data?.countriesList[id]
      //Returning event and country obj
      field.onChange({
        ...field.value,
        dialFlag: obj.countryFlagUrl,
        dialCode: obj.dialCode,
      })
    }

    if (dataset.name === 'number') {
      field.onChange({
        ...field.value,
        dialNumber: value,
      })
    }
  }

  if (error) {
    console.error(error)
  }

  return (
    <CInputGroup>
      <CDropdown variant="input-group">
        <CDropdownToggle color="secondary" variant="outline" split style={{ width: '30px' }} />
        <CInputGroupText className="flex">
          {!!field.value?.dialFlag ? (
            <>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt, @next/next/no-img-element */}
              <Image src={field.value?.dialFlag} width={24} height={16} alt="flag" />{' '}
              <span>{field.value?.dialCode}</span>
            </>
          ) : (
            <CIcon icon={cilGlobeAlt} />
          )}
        </CInputGroupText>
        <CDropdownMenu className="w-100" onClick={handleFlagChange}>
          <Each
            of={data?.countriesList}
            render={(item: countryOptionType, index) => {
              return (
                <CDropdownItem id={`${index}`} data-name="flag">
                  <Image src={item.countryFlagUrl} width={24} height={16} alt={item.countryName} />
                  <span style={{ marginLeft: '10px' }}>{item.countryName}</span>
                </CDropdownItem>
              )
            }}
          />
        </CDropdownMenu>
      </CDropdown>
      <CFormInput
        type="text"
        id={props.name}
        data-name="number"
        placeholder="e.g 245456897"
        onChange={handleFlagChange}
        onBlur={field.onBlur}
        ref={field.ref}
        value={field.value.dialNumber}
        valid={fieldState.isDirty && !!!fieldState.error?.dialNumber ? true : false}
        invalid={!!fieldState.error?.dialNumber && true}
      />
    </CInputGroup>
  )
}

export default DialCode
