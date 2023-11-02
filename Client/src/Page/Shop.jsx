import React from "react";
import Img1 from "../assets/skjlfd/kaju barfi.jpeg";
import Img2 from "../assets/skjlfd/mewa bite.jpg";
import Img3 from "../assets/skjlfd/kaju anjeer barfi.jpeg";
 import Img4 from "../assets/skjlfd/motichoor laddoo.jpeg";
 import Img5 from "../assets/skjlfd/mathura peda.jpg";
 import Img6 from "../assets/skjlfd/rasgulla.jpg";
 import Img7 from "../assets/skjlfd/magdal.jpg";
 import Img8 from "../assets/skjlfd/Mysore_pak.jpg";
 import Img9 from "../assets/skjlfd/besan gazk.webp";
 import Img10 from "../assets/skjlfd/choco bite.jpg";
 import Img11 from "../assets/skjlfd/samosa.jpg";
 import Img12 from "../assets/skjlfd/khasta.jpg";
 import Img13 from "../assets/skjlfd/jalebi.jpg";
 import Img14 from "../assets/skjlfd/sandwich.jpg";
 import Img15 from "../assets/skjlfd/chilli paneer.jpg";
 import Img16 from "../assets/skjlfd/chilli corn dry.jpg";
 import Img17 from "../assets/skjlfd/steam momo.jpg";
 import Img18 from "../assets/skjlfd/masala dosa.jpg";
 import Img19 from "../assets/skjlfd/idly sambhar.jpg";
 import Img20 from "../assets/skjlfd/uttapam.jpg";
 import Img21 from "../assets/skjlfd/stock-photo-shahi-paneer-in-handi-with-wooden-background-1692310198.jpg";
 import Img22 from "../assets/skjlfd/kalyani-akella-vgTntT8PmIM-unsplash.jpg";
 import Img23 from "../assets/skjlfd/paneer tikka.jpg";
 import Img24 from "../assets/skjlfd/hara bhara kabab.jpg";
 import Img25 from "../assets/skjlfd/mushroom boti.jpg";



const Shop = () => {
  const data = [
    {
      images: Img1,
      title: "Kaju Barfi",
      description: "",
    },
    
    {
      images: Img2,
      title: "Mewa Bite",
      description: "",
    },
    {
      images: Img3,
       title: "Kaju Anjeer Barfi",
       description: "",
     },
     {
       images: Img4,
       title: "Motichoor laddoo",
       description: "",
     },
  
     {
     images: Img5,
      title: "Mathura Peda",
      description: "",
    },
    {
       images: Img6,
      title: "Rasgulla",
      description: "",
    },
    {
      images: Img7,
      title: "Magdal",
      description: "",
    },
    {
      images: Img8,
      title: "Maysor Pak",
      description: "",
    },
    {
      images: Img9,
      title: "Besan Gajak",
      description: "",
    },
    {
      images: Img10,
      title: "Choco Bite",
      description: "",
    },
    {
      images: Img11,
      title: "Samosa",
      description: "",
    },
    {
      images: Img12,
      title: "Khasta",
      description: "",
    },
    {
      images: Img13,
      title: "Jalebi",
      description: "",
    },
    {
      images: Img14,
      title: "Sandwich",
      description: "",
    },
    {
      images: Img15,
      title: "Dry Chilli Paneer",
      description: "",
    },
    
    {
      images: Img16,
      title: "Corn Chilli Dry",
      description: "",
    },
    {
      images: Img17,
      title: "Steam Momo",
      description: "",
    },
    {
      images: Img18,
      title: "Masala Dosa",
      description: "",
    },
    {
      images: Img19,
      title: "Idli Sambhar ",
      description: "",
    },
    {
      images: Img20,
      title: "Uttapam",
      description: "",
    },
    {
      images: Img21,
      title: "Haandi Paneeer",
      description: "",
    },
    {
      images: Img22,
      title: "Kadahi Paneer",
      description: "",
    },
    {
      images: Img23,
      title: "Paneer Tikka",
      description: "",
    },
    {
      images: Img24,
      title: "Hara bhara Kabab",
      description: "",
    },
    {
      images: Img25,
      title: "Mushroom Boti",
      description: "",
    },
  ];
  return (
    <div className="container flex flex-wrap my-12 mx-auto  md:px-12">
      {data.map((val, index) => {
        return (
          <div
            className="my-1  w-full md:w-1/2 lg:w-1/4 pb-24 text-center hover:bg-[#fcf9ed]"
            key={index}
          >
            <div className="flex justify-center">
              <img className="pt-20 pl-4" src={val.images} alt="" />
            </div>
            <h2 className="pt-10 text-4xl font-semibold">{val.title}</h2>
            <h3 className="text-xl pt-10">{val.description}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
