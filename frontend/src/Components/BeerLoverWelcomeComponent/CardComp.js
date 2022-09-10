const Card = ({ images }) => {
  
    return (
      <>
        {images.map((img, i) => {
          return (
          <div 
          className="card" 
          key={i} 
          style={{background: `url("${img.url}") no-repeat center/cover`}}>
          </div>)
        })}
      </>
    );
  };
  
  export default Card