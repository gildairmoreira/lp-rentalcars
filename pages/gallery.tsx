import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import React from 'react'
import { gallery } from '@/Data/Data'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { smoothIn } from '@/animate'

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Maverick - Gallery</title>
      </Head>

      <Wrapper className=' text-center flex flex-col justify-center pt-40'>
        <div>
          <motion.div
            variants={smoothIn('down', 0.2)} initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='uppercase font-semibold text-sm text-WhiteGray mb-4'>
            - Nossa Coleção
          </motion.div>
          <motion.div className='container grid lg:grid-cols-2 gap-8'>
            {
              gallery.map((item) => (
                <div key={item.id} className='relative overflow-hidden rounded-xl group'>
                  <div>
                    <Image
                      src={item.image}
                      alt={item.desc}
                      width={480}
                      height={380}
                      className='w-full transition-transform duration-300 transform hover:scale-125 hover:rotate-2'
                    />
                  </div>
                  <div className='absolute bottom-5 uppercase bg-Black/60 text-[1rem] tracking-widest text-WhiteGray text-left overflow-hidden ml-0 w-max'>
                    <div className='px-3 my-2'>
                      {item.name}
                    </div>
                  </div>
                </div>
              ))
            }
          </motion.div>
        </div>
      </Wrapper>
    </>
  )
}

export default Gallery