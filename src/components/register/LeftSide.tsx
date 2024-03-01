// @ts-nocheck
import Image from 'next/image'
import avatar8 from '@/public/brand/eganow-white-logo.svg'
import classNames from 'classnames'
import Link from 'next/link'

//
import { LeftSideProps } from '@/types/CommonDataType'
import { FormattedMessage } from 'react-intl'
import { useEffect, useState } from 'react'

const LeftSide = (props: LeftSideProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      {isClient && (
        <>
          <div className="left-side radial-gradient">
            <div className="left-heading">
              <Image src={avatar8} alt="logo" width={190} />
            </div>
            {/*  */}
            <div className="steps-content">
              <h3>
                <FormattedMessage id="step" defaultMessage={'Step'} />
                <span className="step-number">{props.stepCount + 1}</span>
              </h3>
              <p className="step-number-content active">
                {props.stepList[props.stepCount]?.content}
              </p>
            </div>
            {/*  */}
            <ul className="step-progress-bar">
              {props.stepList?.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={classNames({
                      active: index <= props.stepCount || false,
                    })}
                  >
                    {value.title}
                  </li>
                )
              })}
            </ul>
            <div className="mt-5 text-white">
              <Link href="/login" className="text-white">
                {' '}
                <FormattedMessage id="back_to_login" defaultMessage={'Back to login'} />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default LeftSide
