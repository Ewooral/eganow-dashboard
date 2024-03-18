// @ts-nocheck
import React, { useRef } from 'react'
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
import sharedServiceGRPC from '@/api/sharedServiceGRPC'
/* USE_QUERY */
import { useQuery } from '@tanstack/react-query'
import Each from '@/components/Each'
import { isEmpty_util } from '@/util'
import { countryPropsType } from '@/types/CommonDataType'

const Country = (props: countryPropsType) => {
  //Creating a react hook form controlled component
  const { field, fieldState } = useController({
    name: props.name,
    control: props.handleForm.control,
  })
  const inputRef = useRef(null)
  //Fetching API
  const { getCountries } = sharedServiceGRPC()
  //Fetching countries with useQuery
  const { error, data } = useQuery({
    queryKey: ['countryData'],
    queryFn: () => getCountries({ countryFilter: 'COUNTRY_FILTER_SIGNUP' }),
    staleTime: 5000,
  })

  function handleChange(event) {
    const { id } = event.target
    const obj = data?.countriesList[id]

    //Triggering onChange event on the selected country
    if (!isEmpty_util(obj)) {
      field.onChange({
        flag: obj.countryFlagUrl,
        code: obj.countryCode,
        name: obj.countryName,
      })

      //Call props.callback
      if (typeof props.callback === 'function') {
        props.callback(event, obj)
      }
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
        <CInputGroupText
          color="secondary"
          variant="outline"
          className={`${props?.className} dark:border-1`}
          style={{ width: '50px' }}
        >
          {!!field.value?.flag ? (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt, @next/next/no-img-element
            <img src={field.value?.flag} width={24} height={16} alt="flag" />
          ) : (
            <CIcon icon={cilGlobeAlt} size="lg" />
          )}
        </CInputGroupText>

        <CDropdownMenu
          className="w-100 overflow-auto"
          onClick={handleChange}
          style={{ maxHeight: '290px' }}
        >
          <Each
            of={data?.countriesList}
            render={(item, index) => {
              return (
                <CDropdownItem id={`${index}`} data-name="flag" style={{ cursor: 'pointer' }}>
                  <Image src={item.countryFlagUrl} width={24} height={16} alt={item.countryName} />
                  <span style={{ marginLeft: '10px' }}>{item.countryName}</span>
                </CDropdownItem>
              )
            }}
          />
        </CDropdownMenu>

        <CDropdownToggle caret={false} color="secondary" variant="outline" custom={true}>
          <CFormInput
            className={props?.className}
            type="text"
            id={props.name}
            data-name="name"
            onBlur={field.onBlur}
            ref={inputRef}
            placeholder="Select country."
            readOnly={true}
            value={field.value?.name}
            valid={
              props.shouldValidate && fieldState.isDirty && !!!fieldState.error?.name ? true : false
            }
            invalid={props.shouldValidate && !!fieldState.error?.name && true}
          />
        </CDropdownToggle>
      </CDropdown>
    </CInputGroup>
  )
}

export default Country
