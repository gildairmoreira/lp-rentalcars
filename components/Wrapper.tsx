import React from 'react'
import { WrapperProps } from '@/Types';

function Wrapper({children,className}:WrapperProps) {
  return (
    <section className={className}>
    <>
        {children}
    </>
    </section>
  )
}

export default Wrapper