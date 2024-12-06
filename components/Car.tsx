import Image from 'next/image'
import React from 'react'

function Car() {
  return (
    <div>
        <Image
        src={'/home.jpg'}
        alt=""
        width={1980}
        height={1080}
        className='traslate-z-0 w-[54rem] h-full'
      />
    </div>
  )
}

export default Car