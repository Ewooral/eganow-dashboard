import React from 'react'

interface CardsProps {
  prefix: string
  icon: JSX.Element
  value: string
  subtitle: string
}

const Cards = (props: CardsProps) => {
  return (
    <div className="bg-white dark:bg-dark mb-3 pb-3 d-flex justify-content-between align-items-center p-3 rounded">
      <div className="">
        <h4 className="m-0">
          {props.prefix}
          {props.value}
        </h4>
        <small>{props.subtitle}</small>
      </div>
      {props.icon}
    </div>
  )
}

export default Cards
