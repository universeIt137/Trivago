import React from 'react';

const Service = () => {
    return (
        <div>
            <section className='container mx-auto w-10/12'>
                <div className='text-pink-600'>WHAT WE SERVE</div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>
                    <div className=' '>
                        <p className='text-4xl lg:text-5xl font-bold text-[#252b42] mt-3'>Top Values <br/>For You</p>
                        <p className='text-lg font-normal text-[#252b42] mt-8'>Embrace life's vastness <br/>venture forth,</p>
                    </div>
                    <div className=' px-8'>
                        <img src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735624229/Trivago/xgvjyhbmacimb2w0ix3m.png" alt="" />
                        <p className='text-2xl font-bold text-[#252b42]'>Lot of choices</p>
                        <p className='text-lg font-normal text-[#252b42] mt-8'>Embrace life's vastness <br/>venture forth,</p>
                    </div>
                    <div className='px-8'>
                        <img src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735624212/Trivago/k53ohlrflwdgpmkatlnb.png" alt="" />
                    <p className='text-2xl font-bold text-[#252b42]'>Lot of choices</p>
                    <p className='text-lg font-normal text-[#252b42] mt-8'>Embrace life's vastness <br/>venture forth,</p>
                    </div>
                    <div className='pl-8 '>
                        <img src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735624168/Trivago/autfwjx2htcek6skwhdk.png" alt="" />
                    <p className='text-2xl font-bold text-[#252b42]'>Lot of choices</p>
                    <p className='text-lg font-normal text-[#252b42] mt-8'>Embrace life's vastness <br/>venture forth,</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;