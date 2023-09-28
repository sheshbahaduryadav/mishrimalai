import React from 'react'
import post1 from "../Icon/post-img1.jpg";
import post2 from "../Icon/post-img2.jpg";
import post3 from "../Icon/post-img3.jpg";

const Contacts = () => {
  const data = [
    {
      images: post1,
      title: "Aenean Laoreet",
      description: "By Bakeryblocks1",
    },
    {
      images: post2,
      title: "Praesent Accum Aesan",
      description: "By Bakeryblocks1",
    },
    {
      images: post3,
      title: "Aenean Laoreet Nibh",
      description: "By Bakeryblocks1",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto  sm:p-10 md:p-16">

      <div className="text-center text-3xl">
        <p  className="text-amber-500 mb-2 font-bold text-xl ">Customer Reviews</p>
        <p className="text-5xl mx-10 mb-10 font-semibold leading-tight">
          What Going On In <br /> Our Blog?
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {data.map((val, i) => {
          return (
            <div className="rounded overflow-hidden shadow-lg"  key={i}>
              <div className="relative">
            <div className="w-full">
              <img src={val.images} alt="" />
              <div className="px-6 py-4">
              <h2 className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                {val.title}</h2>
              <h3  className="text-gray-500 text-sm">
                {val.description}</h3>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
                <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <span className="ml-1">6 mins ago</span></span>
            </div>
            </div>
            </div>
            </div>
          );
        })}
      </div>  
</div>
  )
}

export default Contacts