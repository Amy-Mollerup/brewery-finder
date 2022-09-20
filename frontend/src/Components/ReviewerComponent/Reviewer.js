import React from 'react';
import PropTypes from "prop-types";
import { FaStar } from 'react-icons/fa';
import "./ReviewerStyle.css"
import { Button } from 'reactstrap';
import axios from 'axios';

export default function Reviewer(props) {
    const [formData, setFormData] = React.useState({
        review: "",
        rating: 4  
    });

    let isSubmitted = false

    React.useEffect(()=>{
    
    
    }, [])

    function handleChange(event) {
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [event.target.name]: event.target.value
          }
        })
        console.log(props.beerId)
      }

      function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        axios.post('http://localhost:8081/beer/' + props.beerId + '/reviews', formData)
        .then(resp => {
          if (resp.status === 200) {
            alert("Review created!")
            isSubmitted = true
            window.location.reload()}}
          )}
    


    function StarRating(props){
        const change = (newStars)=>{
           props.onChange(newStars)
        }
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 1,
            h: "24px",
                }}>
                <div className="star-rating"
                style={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 1,
                
                }}
                
                >
                    {[1,2,3,4,5].map((n, i) => (
                    <Star
                        key={i}
                        selected={i < props.value}
                        onClick={() =>change(i + 1)}
                    />
                    ))}
                </div>
            </div>
        )
    }
    
    const Star = ({ selected = false, onClick = f => f }) => (
        <div style={{margin:'4px'}}>
            {selected ? (<FaStar onClick={onClick} style={{color: 'orange', cursor: "pointer", fontSize:'10px'}} />):
                (<FaStar onClick={onClick} style={{color: 'grey', cursor:'pointer', fontSize:'8px'}} />)}
        </div>
      );
    
      Reviewer.propTypes = {
        fieldData: PropTypes.array
    };

    const handleStarChange =(newValue)=>{
        setFormData(oldData => ({
            ...oldData,
            rating: newValue
        }))
        console.log(formData)
    }


    return (
        <div>
            {!isSubmitted ? (
                <div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> 
                    <div style={{margin: '2px'}} name="review">
                        <StarRating value={formData.rating} onChange={handleStarChange} name="review" />
                    </div>

                    <div className='textarea---container'>
                  {/*       <input
                            type='textarea'
                            rows="10" 
                            cols="10" 
                            value={FormData.review} 
                            name="review"
                            onChange={handleChange}
                            placeholder="Write your review here..."
                           >
                        </input> */}

                        <textarea
                            type='textarea'
                            rows="10" 
                            cols="40" 
                            value={FormData.review} 
                            name="review"
                            onChange={handleChange}
                            placeholder="Write your review here..."
                           >
                        </textarea>

                    </div>
                    <div>
                        <button> Submit
                        </button>
                    </div>
                  </div>
                </form>
                </div>
            ) : (
                <p style={{margin:'10px',
                            color:'#ff7f50', 
                            fontSize:'25px',
                            fontWeight:'900',
                            textAlign:'center'
                            }} >Thanks for Sharing your value review. We take our feedback system very seriously.</p>
            )}
        </div>
    )
}
