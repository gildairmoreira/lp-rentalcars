import React from 'react'
import { WrapperProps } from '@/Types';

function Wrapper({children,className}:WrapperProps) {
  return (
    <section className={`min-h-[calc(100vh-4rem)] pt-16 ${className}`}>
        {children}
    </section>
  )
}

export default Wrapper