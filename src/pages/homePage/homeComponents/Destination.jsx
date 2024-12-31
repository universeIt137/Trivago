import React from 'react';

const Destination = () => {
    return (
        <div>
            <section className='container mx-auto w-10/12 mb-20'>
                <div className='text-pink-600'>WHAT WE SERVE</div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                    <div className='rounded-lg '>
                        <img className='rounded-[40px] shadow-lg ' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735624339/Trivago/ecoptyoaia64q1fsjost.png" alt="" />
                        <p >Cappadocia</p>
                    </div>
                    <div>
                        <img className='rounded-[40px] shadow-lg' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735624339/Trivago/olyuocfddhautd5d3ece.png" alt="" />
                    </div>
                    <div>
                        <img className='rounded-[40px] shadow-lg' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735624340/Trivago/bd75rbsvucngprhyxv7i.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Destination;