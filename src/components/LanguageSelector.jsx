import React from 'react'
import { useLocale } from '@/store'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CFormSelect } from '@coreui/react-pro'


function LanguageSelector() {
  const locale = useLocale((state) => state.locale)
  const setLocale = useLocale((state) => state.setLocale)

  // LIST OF LANGUAGES AVAILABLE
  const dropdownItems = [
    { label: 'English', value: 'en', img: 'https://res.cloudinary.com/eganow/image/upload/v1640022623/Flags/GB0044.png' },
    { label: 'French', value: 'fr', img: 'https://res.cloudinary.com/eganow/image/upload/v1640022623/Flags/FR0033.png' },
  ];

  // handle language chanage
  function handleChange(event) {
    if (event) {
      setLocale(event)
    }
  }


  return (
    <div className='text-center d-flex align-items-center justify-content-end mb-3 z-3'>
      <CDropdown direction="center">
        {/* CURRENT OPTION USER HAS SELECTED */}
        <CDropdownToggle color='secondary' size="sm"style={{background:'white'}}>
          {dropdownItems.find(item => item.value === locale) ? (
            <>
              <img
                src={dropdownItems.find(item => item.value === locale).img}
                alt={locale}
                width={30}
                height={20}
                style={{ marginRight: '10px' }}
              />
              {dropdownItems.find(item => item.value === locale).label}
            </>
          ) : (
            'Select Language'
          )}
        </CDropdownToggle>
          
          {/* MENU OPTIONS FOR USER TO SELECT */}
        <CDropdownMenu style={{marginTop:'40px'}}>
          {dropdownItems.map((item, index) => (
            <CDropdownItem key={index} href="#" onClick={() => handleChange(item.value)}>
              <img src={item.img} width={30} height={20} alt="flag" style={{ marginRight: '10px' }} />
              {item.label}
            </CDropdownItem>
          ))}
        </CDropdownMenu>
      </CDropdown>
    </div>
  )
}

export default LanguageSelector