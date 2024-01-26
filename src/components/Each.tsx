import React, { Children } from 'react'

const Each = ({ render, of }: { render: (item:any, index:number) => {}; of: any }) => {
  return <>{Children.toArray(of?.map((item, index) => render(item, index)))}</>
}

export default Each
