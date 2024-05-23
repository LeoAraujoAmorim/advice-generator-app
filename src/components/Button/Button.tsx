// import { ComponentsTypes } from '@/types/ComponentsTypes'
import Image from 'next/image'
import React from 'react'


type BtnType = {
  onClick?: () => void
}


const Button: React.FC<BtnType> = ({ onClick }) => {
  return (
      <button className='bg-[#00FF7F]  rounded-full p-4 glow-btn hover:rotate-180 transition duration-300 hover:scale-110' onClick={onClick}>
        <Image src="/images/icon-dice.svg" alt='dado' width={25} height={25} />
      </button>
  )
}

export default Button;
