import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import React from 'react'

import { motion } from 'framer-motion'
import { smoothIn } from '@/animate'
import Image from 'next/image'
import Skills from '@/components/Skills'
import { skills } from '@/Data/Data'

function skilllevel() {
  return (
    <>
      <Head>
        <title>Maverick - Experiência</title>
      </Head>
      <Wrapper className='text-center flex flex-col mt-24 justify-center'>
        <div className='w-full h-full'>
          <motion.div
          variants={smoothIn('down', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='text-WhiteGray font-medium uppercase text-sm text-center'>
            - Apenas o melhor
          </motion.div>

          <motion.div
            variants={smoothIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='font-semibold text-3xl mt-4 lg:mb-16 mb-8'>
              Nossos Clientes Satisfeitos em Todo o Mundo
          </motion.div>

          <div className='flex h-full flex-col justify-center text-center'>
            <div className='flex flex-col items-center gap-12 lg:flex-row justify-center mb-12 lg:pt-0 pt-12'>
              <motion.div
                variants={smoothIn('right', 0.5)}
                initial='hidden'
                animate='show'
                exit='hidden'
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
              <Image
                src={'/skills.jpg'}
                alt="Habilidade"
                width={400}
                height={500}
                className='traslate-z-0 w-[54rem] h-2/3'
              />

              </motion.div>

              <motion.div
                variants={smoothIn('left', 0.5)}
                initial='hidden'
                animate='show'
                exit='hidden'
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='lg:ml-8 lg:max-w-md'
              >
                <Skills skills={skills} />
              </motion.div>
            </div>
          </div>

        </div>
      </Wrapper>
    </>
  )
}

export default skilllevel