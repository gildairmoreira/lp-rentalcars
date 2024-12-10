import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import React from 'react'
import { services } from '@/Data/Data'

import { motion } from 'framer-motion'
import { smoothIn } from '@/animate'

function Services() {
  return (
    <>
      <Head>
        <title>Maverick - Services</title>
      </Head>
      <Wrapper className='flex flex-col mt-24 justify-center'>
        <div className='h-full'>
          <div className='text-center my-8 md:px-8'>
            <motion.div
              variants={smoothIn('up', 0.5)}
              initial='hidden'
              animate='show'
              exit='hidden'
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <div className='uppercase font-medium text-sm text-WhiteGray'>
                - Serviços
              </div>

              <div className='font-semibold text-3xl mt-8'>
                Nossos Clientes Satisfeitos em Todo o Mundo
              </div>

              <p className='text-Black text-sm mt-8 leading-7 max-w-3xl mx-auto'>
                Eu ofereço uma gama completa de servicos de desenvolvimento web, desde
                design e desenvolvimento de websites até integração de API e
                otimização de performance. Eu me especializo em criar aplica es web de alta
                qualidade e responsivas que entregam uma experiência do usuário excepcional
              </p>
            </motion.div>

            <motion.div
              variants={smoothIn('down', 0.5)}
              initial='hidden'
              animate='show'
              exit='hidden'
              transition={{ duration: 1, ease: 'easeInOut' }}
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-Black gap-4 mt-8'
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className='p-8 bg-white rounded-lg border-2 hover:border-red-500 text-center transition-all duration-300'
                >
                  <div className='flex justify-center text-Red text-5xl mb-4'>{service.icon}</div>
                  <div className='flex justify-center mb-4 text-2xl font-medium'>{service.title}</div>
                  <div className='flex justify-center text-Black text-sm'>
                    {service.description}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Services