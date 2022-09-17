import React ,{useState} from 'react'
import Card from './CardComp';

export default function Top4BeerLoverComponent() {
  const [images, setImages] = useState([
    {url: "http://source.unsplash.com/random/?beer" },
    {url: "http://source.unsplash.com/random/?brewery" },
    {url: "http://source.unsplash.com/random/?pub" },    
    {url: "http://source.unsplash.com/random/?beer-bar" },
    {url: "http://source.unsplash.com/random/?beer-barrel" },
    {url: "http://source.unsplash.com/random/?beer-fest" },
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