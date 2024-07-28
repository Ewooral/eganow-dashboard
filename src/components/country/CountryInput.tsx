// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react'
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
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [searchTerm, setSearchTerm] = useState('') // State to store the search term
  const inputRef = useRef(null)
  const dropdownRef = useRef(null)

  // Creating a react hook form controlled component
  const { field, fieldState } = useController({
    name: props.name,
    control: props.handleForm.control,
  })

  // Fetching API
  const { getCountries } = sharedServiceGRPC()

  // Fetching countries with useQuery
  const { error, data } = useQuery({
    queryKey: ['countryData'],
    queryFn: () => getCountries({ countryFilter: 'COUNTRY_FILTER_SIGNUP' }),
    staleTime: 5000,
  })

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function handleChange(event, item) {
    // Triggering onChange event on the selected country
    if (!isEmpty_util(item)) {
      field.onChange({
        flag: item.countryFlagUrl,
        code: item.countryCode,
        name: item.countryName,
      })

      // Call props.callback
      if (typeof props.callback === 'function') {
        props.callback(event, item)
      }
    }

    // Setting focus to country input
    if (props.shouldValidate) inputRef.current.focus()
    setSearchTerm('')
    setToggleDropdown(false)
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value) // Update search term as user types
  }

  // Filter countries based on search term
  const filteredCountries = data?.countriesList?.filter((country) =>
    country.countryName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (error) {
    console.error(error)
  }

  return (
    <CInputGroup>
      <CDropdownToggle
        caret={false}
        color="secondary"
        variant="outline"
        custom={true}
        className="d-none"
      ></CDropdownToggle>
      <CDropdown className="" variant="input-group" alignment="end" visible={toggleDropdown}>
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
          ref={dropdownRef}
          className="w-100 overflow-auto mt-5"
          style={{ maxHeight: '290px' }}
        >
          <CFormInput
            className="px-3 border-0  border-bottom rounded-0"
            placeholder="Search country..."
            value={searchTerm}
            onChange={handleSearchChange}
            autoFocus
          />
          <Each
            of={filteredCountries}
            render={(item, index) => (
              <CDropdownItem
                onClick={(e) => handleChange(e, item)}
                className=""
                id={`${index}`}
                data-name="flag"
                style={{ cursor: 'pointer' }}
              >
                <Image src={item.countryFlagUrl} width={24} height={16} alt={item.countryName} />
                <span style={{ marginLeft: '10px' }}>{item.countryName}</span>
              </CDropdownItem>
            )}
          />
        </CDropdownMenu>
        <CFormInput
          className={props?.className}
          type="text"
          id={props.name}
          data-name="name"
          onBlur={field.onBlur}
          ref={inputRef}
          onClick={() => setToggleDropdown(!toggleDropdown)}
          placeholder="Select country."
          value={field.value?.name}
          valid={
            props.shouldValidate && fieldState.isDirty && !!!fieldState.error?.name ? true : false
          }
          invalid={props.shouldValidate && !!fieldState.error?.name && true}
          readOnly
        />
      </CDropdown>
    </CInputGroup>
  )
}

export default Country
