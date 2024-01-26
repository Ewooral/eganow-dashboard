import Image from 'next/image'
import avatar8 from '@/public/brand/eganow-white-logo.svg'
import classNames from 'classnames'
import Link from 'next/link';

type progressBar = {
  title: string;
  content: string;
  component?: HTMLPreElement;
}

type LeftSideProps = {
  stepCount: number;
  stepList: progressBar[];
}

const LeftSide = (props: LeftSideProps) => {
  
  return (
    <div className="left-side radial-gradient">
      <div className="left-heading">
        <Image src={avatar8} alt="logo" width={190} />
      </div>
      {/*  */}
      <div className="steps-content">
        <h3>
          Step <span className="step-number">{props.stepCount + 1}</span>
        </h3>
        <p className="step-number-content active">{props.stepList[props.stepCount]?.content}</p>
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
          Back to login
        </Link>
      </div>
    </div>
  )
}

export default LeftSide
