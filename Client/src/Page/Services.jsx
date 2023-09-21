import React from 'react'
import img7 from "../Icon/section2-img.png"
import img8 from "../Icon/product-img1.jpg"
import img9 from "../Icon/section4-img.png"
import img10 from "../Icon/product-img2.jpg"
import img11 from "../Icon/product-img3.jpg"
import img12 from "../Icon/product-img4.jpg"
import img13 from "../Icon/product-img5.jpg"
import img14 from "../Icon/product-img6.jpg"
import img15 from "../Icon/product-img7.jpg"
import img16 from "../Icon/product-img8.jpg"


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
    <div>
    <div className="imagetext">
  <div className="image">
    <img src= {img7} alt="" />
  </div>
  <div className="tet">
    <h1 className="tet1">Selected wheat and creative recipes make wonders</h1>
    <p className="ppp">Vivamus pharetra sapien libero, id aliquam masisa dictum ac. Aenean id accumsan justo. Sed dapibid augue eu hendrerit. Crais sed nisi ut turpis sagittisy luctus. Etiam nulla purus pulvinar et eros ut pretium euismod nibhed libero leo ornare.</p>
    <button id='btn'>Read More</button>
  </div>
  </div>
  <div className='mid'>
    <h1>Discover Curesty<br/>Bread and Cake</h1>
  </div>
  <div className="sl">
      {
        data.map((val, index)=>{
          return (

        
    <div className="sls" key={index}>
      <img src ={val.images} class="card-image"  alt="" />
      <h2>{val.title}</h2>
      <h3>{val.description}</h3>
    </div>
      )
    })
  }
  </div>
  <div className="it">
  <div className="imag">
    <img src= {img9} alt="" />
  </div>
  <div className="tet">
    <h1 className="tet1">Make Crusty Bread by Soulful Bakers With Love</h1>
    <p className="ppp">Cras ac fermentu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt felise nonte nulla efficitur congue. Phasellus venenatis viverra nisi vitae susmauris euismod at. Etiam dignissim ultricies tellus, at molesti ipsum posuere vel. Nam fermentum sagittis tellus egetistique. Nunc consequat telus eget leo accumsan, eu luctus justo rutrum.</p>
    <button id='btn'>Read More</button>
  </div>
  </div>
  </div>
  )
}

export default Services