import React from 'react'

import img8 from "../Icon/product-img1-removebg-preview.png"
import img9 from "../Icon/section4-img.png"
import img10 from "../Icon/product-img2-removebg-preview.png"
import img11 from "../Icon/product-img3-removebg-preview.png"
import img12 from "../Icon/product-img4-removebg-preview.png"
import img13 from "../Icon/product-img5-removebg-preview.png"
import img14 from "../Icon/product-img6-removebg-preview.png"
import img15 from "../Icon/product-img7-removebg-preview.png"
import img16 from "../Icon/product-img8-removebg-preview.png"


const Services = () => {
  const data=[
    {
      images:img8,
      title:"Crunchy Crust",
      description:" "
    },
    {
      images:img10,
      title:"Crescent Roll",
      description:""
    },
    {
      images:img11,
      title:"Round Eye",
      description:""
    },
    {
      images:img12,
      title:"Yeast Custard",
      description:""
    },
    {
      images:img13,
      title:"Butter Cookie",
      description:""
    },
    {
      images:img14,
      title:"Bun Messes",
      description:""
    },
    {
      images:img15,
      title:"Slice Bread",
      description:""
    },
    {
      images:img16,
      title:"Bun Roll",
      description:""
    },
    
  ]
  return (
    <>
   
  <div className="w-full text-center text-3xl font-semibold pb-10 lg:text-5xl leading-loose">
    <p>Discover Curesty<br/>Bread and Cake</p>
  </div>
  <div className="container flex flex-wrap mx-auto ">
      {
        data.map((val, index)=>{
          return (        
    <div className="my-1 w-full md:w-1/2 lg:my-4  lg:w-1/4 pb-24 text-center hover:bg-[#fcf9ed]" 
    key={index}>
      <img  className="p-16"
      src ={val.images} alt=""/>
      <h2 className="pt-10 text-3xl font-semibold">
        {val.title}</h2>
      <h3 className="text-xl pt-10">
        {val.description}</h3>
    </div>
      )
    })
  }
  </div>
  
  </>
  )
}

export default Services