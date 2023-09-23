import React from 'react'
import Img1 from "../Icon/category-img1.png"
import Img2 from "../Icon/category-img2.png"
import Img3 from "../Icon/category-img3.png"
import Img4 from "../Icon/category-img4.png"
const Shop = () => {
  const data=[
    {
      images:Img1,
      title:"Breakfast",
      description:"Volutpat sit amet efficitur mattis turpis."
    },
    {
      images:Img2,
      title:"Pastry",
      description:"Volutpat sit amet efficitur mattis turpis."
    },
    {
      images:Img3,
      title:"Sandwich",
      description:"Volutpat sit amet efficitur mattis turpis."
    },
    {
      images:Img4,
      title:"Coffee",
      description:"Volutpat sit amet efficitur mattis turpis."
    },
  ]
  return (
    <div className="slide">
      {
        data.map((val, index)=>{
          return (

        
    <div className="slides " key={index}>
      <img src ={val.images} class="card-image"  alt="" />
      <h2>{val.title}</h2>
      <h3>{val.description}</h3>
    </div>
      )
    })
  }
    
  </div>
  )
}

export default Shop