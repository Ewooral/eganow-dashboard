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
import commonAPI from '@/api/commonAPI'
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
  const { getCountries } = commonAPI()
  //Fetching API
  const { error, data } = useQuery({
    queryKey: ['countryData'],
    queryFn: () => getCountries({ filter: 1 }),
    staleTime: 5000,
  })


  function handleFlagChange(country:countryOptionType) {
    const { id, value, dataset } = event.target

    field.onChange({
      ...field.value,
      dialFlag: country.countryFlagUrl,
      dialCode: country.dialCode,
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    let newValue = value.replace(/\D/g, '');
    if (newValue.length > 10) return;
    field.onChange({
      ...field.value,
      dialNumber: newValue,
    })
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
        <CDropdownMenu className="w-100">
          <Each
            of={data?.data}
            render={(item: countryOptionType, index) => {
              return (
                <CDropdownItem id={`${index}`} onClick={() => handleFlagChange(item)} data-name="flag">
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
        minLength={8}
        maxLength={10}
        placeholder="e.g 245456897"
        onChange={handleInputChange}
        onBlur={field.onBlur}
        ref={field.ref}
        value={field.value.dialNumber}
        valid={fieldState.isDirty && !!!fieldState.error?.dialNumber ? true : false}
        invalid={!!fieldState.error?.dialNumber && true}
      />
      {fieldState.error?.dialNumber && (
        <p className="invalid-feedback text-error d-block smallerFontSize">{fieldState.error.dialNumber.message}</p>
      )}
    </CInputGroup>
  )
}

export default DialCode
