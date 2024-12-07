import React from 'react'
import {CountUpProps} from '@/Types';
import CountUp from 'react-countup';

function MyCountUp({ start, end, duration }: CountUpProps) {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
    />
  )
}

export default MyCountUp