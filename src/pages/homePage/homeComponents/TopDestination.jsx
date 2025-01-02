import React from "react";
const TopDestination = () => {
  return (
    <div>
      <section className="container mx-auto w-10/12 mb-20">
        <div className="bg-white p-2 rounded-lg">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
            <div>

            <h1 className="text-xl font-bold text-pink-500">
              TOP DESTINATION
            </h1>
            <br/>
            <p className="text-4xl font-bold text-black mt-1 lg:mt-0">
              Explore top destinations
            </p>
            </div>
          
          <ul className="flex flex-wrap gap-6 text-black">
            <li className="cursor-pointer hover:text-pink-500 transition-colors">
              City
            </li>
            <li className="cursor-pointer hover:text-pink-500 transition-colors">
              Mountain
            </li>
            <li className="cursor-pointer hover:text-pink-500 transition-colors">
              Forest
            </li>
            <li className="cursor-pointer hover:text-pink-500 transition-colors">
              Island
            </li>
          </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div className=" rounded-lg ">
            <img
              className="rounded-[40px] shadow-lg "
              src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735624339/Trivago/ecoptyoaia64q1fsjost.png"
              alt=""
            />
            <div className="bg-transparent">
              <p className=" text-black text-xl">Capaadocia</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                rerum voluptatum impedit sint necessitatibus fuga.
              </p>
            </div>

            <div className="flex justify-between rounded-b-2xl items-center mt-2 bg-white shadow-lg p-3">
              <div>
                <p>Machu,Pichu,Peru</p>
                <p className="text-l">
                  <span className="text-xl">$300</span> x 12 interest free
                </p>
              </div>
              <div className="text-right rounded-lg">
                <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm py-2 px-4 rounded-full mt-2">
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg ">
            <img
              className="rounded-[40px] shadow-lg "
              src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735624339/Trivago/ecoptyoaia64q1fsjost.png"
              alt=""
            />
            <p className="text-black text-xl">Capaadocia</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum
              voluptatum impedit sint necessitatibus fuga.
            </p>

            <div className="flex justify-between rounded-b-2xl items-center mt-2 bg-white shadow-lg p-3">
              <div>
                <p>Machu,Pichu,Peru</p>
                <p className="text-l">
                  <span className="text-xl">$300</span> x 12 interest free
                </p>
              </div>
              <div className="text-right rounded-lg">
                <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm py-2 px-4 rounded-full mt-2">
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg ">
            <img
              className="rounded-[40px] shadow-lg "
              src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735624339/Trivago/ecoptyoaia64q1fsjost.png"
              alt=""
            />
            <p className="text-black text-xl">Capaadocia</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum
              voluptatum impedit sint necessitatibus fuga.
            </p>

            <div className="flex justify-between rounded-b-2xl items-center mt-2 bg-white shadow-lg p-3">
              <div>
                <p>Machu,Pichu,Peru</p>
                <p className="text-l">
                  <span className="text-xl">$300</span> x 12 interest free
                </p>
              </div>
              <div className="text-right rounded-lg">
                <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm py-2 px-4 rounded-full mt-2">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopDestination;
