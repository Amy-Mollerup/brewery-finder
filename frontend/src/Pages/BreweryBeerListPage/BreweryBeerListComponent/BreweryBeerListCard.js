import React from 'react'

const BreweryBeerListCard = (props) => {
  return (
    <div className="card" key={item.id}>
            <div className="card_img">
           {/*  <img alt="Card" src= {require("./data/Beer-Pic.png") }/> */}
           <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.type}<span>\ abv : {item.abv}%</span></p>
                
                <Popup
                  trigger={ <div className="beer-btn">Edit</div>}
                  position="center center"
                  modal
                  >
                  {(close) => (
                    <div>
                      {editBeer}
                      <a className="close" onClick={close}>
                    
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>
                
                <div className="beer-btn" onClick={editBeer}>Delete</div>
                
                <Popup
                  trigger={ <div className="beer-btn">Reviews</div>}
                  position="center center"
                  modal
                  >
                  {(close) => (
                    <div>
                      {reviewLists}
                      <a className="close" onClick={close}>
                    
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>


            </div>
        </div>
  )
}

export default BreweryBeerListCard