import Wrapper from '@/components/Wrapper'
import { contact } from '@/Data/Data'
import Head from 'next/head'
import React from 'react'

//animation
import { motion } from 'framer-motion'
import { smoothIn } from '@/animate'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Maverick - Contact</title>
      </Head>
      <Wrapper className='flex flex-col justify-center items-center lg:flex-row pt-40 lg:pt-40'>
        <motion.div
          variants={smoothIn('left', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='md:px-6 py-6 text-center lg:text-left'
        >
          <div className='text-WhiteGray font-medium uppercase text-sm mb-4'>
            - Transporte de Luxo
          </div>

          <div className='uppercase md:text-3xl md:tracking-widest tracking-wide font-semibold'>
            Viaje com maxima comodidade para o seu destino
          </div>

          <p className='leading-8 mb-8 text-sm max-w-xl mt-10'>
            Nós importamos com a sua comodidade e segurança.  Precisa de um carro? Entre em contato conosco
          </p>
          <div>
            {
              contact.map((item) => (
                <div key={item.id} className='mt-6'>
                  <div className='text-xl font-medium mb-2'>
                    {item.title}
                  </div>
                  <div className='text-sm'>{item.text}</div>
                </div>
              ))
            }
          </div>

          <div className='flex flex-wrap gap-2 mt-2'>
            <span className='border-[#bfa37c] border w-full lg:w-max py-4 px-8 tracking-widest text-sm'>
              + Mais Detalhes
            </span>
          </div>

        </motion.div>

        <motion.div
          variants={smoothIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='lg:w-1/2 sm:w-[30rem] px-6 text-center py-6'
        >
          <div className='uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold mb-10'>
            Deixar Comentario
          </div>

          <form>
            <div className='flex items-center border-b border-Black py-2 mb-8'>
              <input
                type="text"
                className='appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none'
                placeholder='Nome' />
            </div>

            <div className='flex items-center border-b border-Black py-2 mb-8'>
              <input
                type="text"
                className='appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none'
                placeholder='Telefone' />
            </div>

            <div className='flex items-center border-b border-Black py-2 mb-8'>
              <input
                type="email"
                className='appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none'
                placeholder='Email' />
            </div>

            <div className='flex items-center border-b border-Black py-2 mb-8'>
              <textarea
                className='appearance-none bg-transparent border-none w-full text-Black mr-3 py-1 px-2 leading-tight focus:outline-none'
                placeholder='Mensagem' />
            </div>
            <button
              type='submit'
              className='mt-10 px-8 py-4 bg-Red rounded-full text-White uppercase text-sm cursor-pointer hover:bg-Black transition-all ease-in-out duration-300'>
              Enviar
            </button>
          </form>
        </motion.div>

      </Wrapper>
    </>
  )
}

export default Contact