import Car from '@/components/Car'
import Wrapper from '@/components/Wrapper'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head >
        <title>Maverick - Home</title>
      </Head>
      <Wrapper className='flex flex-col justify-center'>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full mix-blend-multiply filter blur-xl sm:w-[68.75rem]'></div>
        <div className='flex-1 flex flex-col justify-center text-center'>
          {/* Heading */}
          <h1 className='h1'>Book. Perfect. {" "}
            <span className='text-Red'>Ride.</span>
          </h1>

          {/* Subtitle */}
          <p className='text-Black mx-auto max-w-xl flex justify-center'>
            Car Dealer é o tema WordPress premium para concessionárias de automóveis mais atraente, criativo, moderno e multifuncional. Ideal para sites de concessionárias, empresas ou sites corporativos. Expresse seu estilo na estrada com nossas diversas variações de cores de veículos, oferecendo opções personalizadas para cada viagem. Melhore os visuais com pontos interativos, fornecendo detalhes e criando narrativas envolventes dentro de suas imagens sem esforço.
          </p>

          {/* Button */}

          <div className='flex gap-4 justify-center mt-8'>
            <button className='flex rounded-full bg-Red px-6 py-2.5 text-sm font-normal hover:bg-Black transition-all duration-300 text-White'>Ver Detalhes</button>
            <button className='flex rounded-full bg-Red px-6 py-2.5 text-sm font-normal hover:bg-Black transition-all duration-300 text-White'>Alugar</button>
          </div>

          <div className='mt-20 w-full h-full'>
            <div className='w-full h-full flex justify-center'>
              <Car />
            </div>

          </div>


        </div>
      </Wrapper>
    </>
  )
}
