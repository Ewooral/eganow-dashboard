/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
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
import { cilGlobeAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import Image from 'next/image'
/* API */
import commonDataSvcGRPC from '@/api/commonDataSvcGRPC'
/* USE_QUERY */
import { useQuery } from '@tanstack/react-query'
import Each from '@/components/Each'
import { isEmpty_util } from '@/util/utils'

type countryOptionType = {
  countryflagurl: string
  countryname: string
  countrydialcode: string
}

type countryPropsType = {
  name: string
  handleForm: string
  countrydialcode: string
  shouldValidate: boolean
  className: string
}

const Country = (props: countryPropsType) => {
  //Creating a react hook form controlled component
  const { field, fieldState } = useController({
    name: props.name,
    control: props.handleForm.control,
  })
  const inputRef = useRef(null)
  //Country options state
  const [countryOptions, setCountryOptions] = useState([])
  //Fetching API
  const { getReceivingOperatingCountries } = commonDataSvcGRPC()
  //Fetching countries with useQuery
  const { error, data } = useQuery({
    queryKey: ['countryData'],
    queryFn: getReceivingOperatingCountries,
    staleTime: 5000,
  })

  useEffect(() => {
    if (data) setCountryOptions(data.countrylistList)
  }, [data])

  function handleChange(event) {
    const { id } = event.target
    const obj = data[id]

    //Triggering onChange event on the selected country
    if (!isEmpty_util(obj)) {
      field.onChange({
        flag: obj.countryflagurl,
        code: obj.countrydialcode,
        name: obj.countryname,
      })
    }

    //Setting focus to country input
    if (props.shouldValidate) inputRef.current.focus()
  }

  if (error) {
    console.error(error)
  }

  return (
    <CInputGroup>
      <CDropdown variant="input-group" alignment="end">
        <CInputGroupText className={props?.className} style={{ width: '50px' }}>
          {!!field.value?.flag ? (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt, @next/next/no-img-element
            <img src={field.value?.flag} width={24} height={16} alt="flag" />
          ) : (
            <CIcon icon={cilGlobeAlt} />
          )}
        </CInputGroupText>

        <CDropdownMenu className="w-100" onClick={handleChange}>
          <Each
            of={countryOptions}
            render={(item, index) => {
              return (
                <CDropdownItem id={`${index}`} data-name="flag">
                  <img src={item.countryflagurl} width={24} height={16} alt={item.countryname} />
                  <span style={{ marginLeft: '10px' }}>{item.countryname}</span>
                </CDropdownItem>
              )
            }}
          />
        </CDropdownMenu>

        <CFormInput
          className={props?.className}
          type="text"
          id={props.name}
          data-name="name"
          onBlur={field.onBlur}
          ref={inputRef}
          placeholder="Select country."
          value={field.value?.name}
          valid={
            props.shouldValidate && fieldState.isDirty && !!!fieldState.error?.name ? true : false
          }
          invalid={props.shouldValidate && !!fieldState.error?.name && true}
        />

        <CDropdownToggle
          color="secondary"
          variant="outline"
          split
          className={props?.className}
        ></CDropdownToggle>
      </CDropdown>
    </CInputGroup>
  )
}

export default Country
