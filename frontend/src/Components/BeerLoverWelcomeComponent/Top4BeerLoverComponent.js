import React ,{useState} from 'react'
import Card from './CardComp';

export default function Top4BeerLoverComponent() {
  const [images, setImages] = useState([
    {url: "http://source.unsplash.com/random/1" },
    {url: "http://source.unsplash.com/random/2" },
    {url: "http://source.unsplash.com/random/3" },    
    {url: "http://source.unsplash.com/random/4" },
    {url: "http://source.unsplash.com/random/5" },
    {url: "http://source.unsplash.com/random/6" },
  ]);


 /*  const NewImages = () => {
     setImages([...images, {
      url: `http://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`
    }])
  } */


  return ( 
  <section className="hero">
    <div className="cardContainer">
     <Card images={images} />
     
    </div>
   
  </section>
  )

}