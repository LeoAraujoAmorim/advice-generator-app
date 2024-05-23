
import React from 'react';
import Button from '../Button/Button';
import Image from 'next/image';

type AdviceProps = {
    idNumber: number;
    advice: string;
    onClick: () => void;
}

const AdviceCard: React.FC<AdviceProps> = ({ idNumber, advice, onClick }) => {
    return (
        <div className="bg-[#3A4455] p-10 w-full max-w-lg rounded-xl drop-shadow-2xl ">
            <div className='flex flex-col align-middle justify-center items-center'>
                <h2 className='font-semibold text-[#00FF7F]'>Advice #{idNumber}</h2>
                <p className='my-14 text-[#c3dde4]'>
                    “{advice}”
                </p>
                <div className='mb-5'>
                    <Image className="w-full " src="/images/pattern-divider-desktop.svg" alt='sla' width={700} height={700} />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <Button onClick={onClick} />
                </div>

            </div>
        </div>

    )
}

export default AdviceCard;