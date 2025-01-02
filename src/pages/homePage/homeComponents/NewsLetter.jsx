import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { IoSend } from 'react-icons/io5';

const NewsLetter = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className="bg-[#facd49] flex items-center text-center rounded-lg ">
                <div className="w-1/4">
                    <img src="https://res.cloudinary.com/dqmmlxnee/image/upload/v1735798681/Trivago/olnr2humep0gzf7d0d5p.png" alt="" />
                </div>
                <div className="w-1/2 space-y-4">
                    <p className="text-3xl font-bold">Sign up to our newsletter</p>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.
                    </p>
                    <div className="relative">

                        <input type="text" className='w-8/12 py-3 px-2 rounded-lg' placeholder='Enter Your email address' />
                        <div className="bg-[#816afe]  flex justify-center py-4 px-4 rounded-lg absolute  right-24 top-0">
                            <IoSend className=' text-white' />
                        </div>
                    </div>
                </div>
                <div className="w-1/4">
                    <img src="https://res.cloudinary.com/dqmmlxnee/image/upload/v1735798680/Trivago/pa7vurppu469hg2itrmf.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;