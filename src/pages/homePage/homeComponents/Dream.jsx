import React from 'react';

const Dream = () => {
    return (
        <div className='grid grid-cols-2 mt-20'>
            <div className='w-10/12 ml-32'>
                <img className='w-[900px]' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735624391/Trivago/dream%20img/fhot9gkj6a9hlwuywn6z.png" alt="" />
                <img className='-mt-[440px] ml-24 w-[225px] ' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735624391/Trivago/dream%20img/lnxdt7yjktp4as0nwiy2.png" alt="" />
            </div>
            <div className='ml-24'>
                <p className='text-xl text-pink-500'>We Are The Best For You</p>
                <p className='text-[35px] font-bold'>Unlock Your Dream <br />
                    Destination</p>
                <p className='text-[13px] mt-6'>We Are Dedicated To Making Your Journey Of <br /> Descovery Truly Unforgatteble.Our Team Of Passionate<br />Travel Exparts Is Hero To Assist You In Finding The<br /> Destination Of Your Dream</p>
                <div className='flex gap-16'>
                    <div className='border border-collapse w-[140px] h-[90px] rounded-3xl mt-6'>
                        <p className='text-4xl text-center mt-6  text-pink-500 font-semibold'>4k+</p>
                        <p className='text-center text-sm mt-2'>Satisfit Coustomers</p>
                    </div>
                    <div className='border border-collapse w-[140px] h-[90px] rounded-3xl mt-6'>
                        <p className='text-4xl text-center mt-6  text-pink-500 font-semibold'>1000+</p>
                        <p className='text-center text-sm mt-2'>Global Destination</p>
                    </div>
                    
                </div>
                <div className='flex gap-16'>
                    <div className='border border-collapse w-[140px] h-[90px] rounded-3xl mt-6'>
                        <p className='text-4xl text-center mt-6 text-pink-500 font-semibold'>24/7</p>
                        <p className='text-center text-sm mt-2'>Coustomer Support</p>
                    </div>
                    <div className='border border-collapse w-[140px] h-[90px] rounded-3xl mt-6'>
                        <p className='text-4xl text-center mt-6 text-pink-500 font-semibold'>100%</p>
                        <p className='text-center text-sm mt-2'>Dedication</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dream;