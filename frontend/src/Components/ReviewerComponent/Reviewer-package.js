import React from 'react';
import PropTypes from "prop-types";

function Reviewer(props) {

    const [starValue, setStarValue] = React.useState(4);
    //console.log(starValue);
    const [textReview, setTextReview] = React.useState("");
    const [startTime, setStartTime] = React.useState(0);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [letterCorrected, setLetterCorrected]= React.useState(0);
    const [timesKeyPressed, setTimesKeyPressed]= React.useState(0);
    const [pastedTimes, setPastedTimes] = React.useState(0);
    const [fieldData, setFieldData] = React.useState([]);

    React.useEffect(()=>{
        
        var fieldDataObject = props.fieldData;
        console.log(fieldDataObject);

        if(fieldDataObject !== undefined){

            fieldDataObject = fieldDataObject.map((str, i)=>({
                name: str, id: i, stars : 0, text: ""
            }));
            setFieldData(fieldDataObject)
        }

       // console.log(fieldDataObject);
    }, [props.fieldData])
    

    function submitReview(e) {
        e.preventDefault();
        var endT = new Date();
        const timeTaken = (endT.getTime() - startTime) / 1000;
        setIsSubmitted(true)
        if(starValue !==null && starValue !== -1 && starValue !== 0 ){
            var res = {
                text : textReview,
                stars: starValue,
                analysis : textAnalysis(textReview, timeTaken),
                categoryData : fieldData
            }
           // console.log(fieldData);
            console.log(res);
            return res;
        } else{
            alert("Please give it some stars");
        }
        
    }

    const handleStarChange =(newValue)=>{
        setStarValue(newValue)
    }

    const clearStar = ()=>{
        setStarValue(-1)
    }

    const textAnalysis = (text, timeTaken)=>{
        const re = /[.!?]/;
        var totalNoOfSpaces = textReview.split(" ").length -1;
        var totalNoOfSentences = textReview.split(re).length -1;
        var minTime = text.length * 0.30;
        var probabilty =  calculateProbability(timeTaken, minTime);
        var remark = decideRemarks(probabilty);
        var result = {
           totalKeyPressed: timesKeyPressed,
           letters : text.length,
           spaces: totalNoOfSpaces,
           sentence : totalNoOfSentences,
           timeTaken : timeTaken,
           probabilty: probabilty,
           remark : remark,
           letterCorrected: letterCorrected,
           pastedTimes: pastedTimes
        }
        return result;
    }

    const calculateProbability = (timeTaken, timeCalculated) =>{
        if(timeTaken > timeCalculated){
            return 0.99;
        } else{
            return timeTaken/timeCalculated;
        }
    }

    const decideRemarks = (prob)=>{
        if(prob <= 0.1){
            return "Clear copy paste";
        } else if ( (0.1 < prob)&& (prob <= 0.4)){
            return "Copy paste";
        } else if ( (0.4 < prob) && (prob <= 0.65)){
            return "Slow copy paster or very fast typer";
        } else if ( (0.65 < prob) && (prob <= 1)){
            return "Legit review";
        }
    }

    const handleTextChange = (event) => {
        var textt = event.target.value;

        if(startTime === 0){
            var startT = new Date();
            setStartTime(startT.getTime())
        }

        if(textReview.length > textt.length){
            setLetterCorrected(letterCorrected + 1);
        }

        if (textt.length -textReview.length > 1 ) {
            setPastedTimes(pastedTimes + 1)
        }
        setTextReview(event.target.value);
        setTimesKeyPressed(timesKeyPressed + 1);
    }

    const handleFieldStarChange = (newValue, i) =>{
        let newerFieldData = [...fieldData];
        newerFieldData[i].stars = newValue;
        setFieldData(newerFieldData)
    }

    const handleFieldTextChange =(text, i)=>{
        let newerFieldData = [...fieldData];
        newerFieldData[i].text = text;
        setFieldData(newerFieldData)
    }

    const makeFieldUI = ()=>{
        return fieldData.map((field, i) =>(
            <div key={i}>

                <div style={{display:'flex', margin: '30px 0px'}}>
                <div>
                    <p style={{fontSize: '20px'}}>{field.name}</p>

                    <StarRating
                    value={fieldData[i].stars}
                    onChange={(newValue) => {
                        console.log(newValue);
                        handleFieldStarChange(newValue, i)
                    }}
                    />
                 </div>
                        <textarea 
                            rows="3" 
                            cols="20" 
                            value={fieldData[i].text}
                            onChange={(event)=>{handleFieldTextChange(event.target.value, i)}}                            
                            placeholder="Write your review here..."
                            style={{resize: 'none',borderRadius: 10, textAlign: 'center'}}>
                        </textarea>
    
                </div>
            </div>
        ))
    }

    return (
        <div>

            

            {!isSubmitted ? (
                <div style={{display: 'flex'}}>
                <form noValidate autoComplete="off" onSubmit={submitReview}>
                    <div>
            <StarRating value={starValue} onChange={handleStarChange} />

                    </div>
                    <div>
                        <textarea 
                            rows="4" 
                            cols="40" 
                            value={textReview} 
                            onChange={handleTextChange}
                            placeholder="Write your review here..."
                            style={{resize: 'none',borderRadius: 10, textAlign: 'center'}}>
                        </textarea>
                    </div>                    
                    <div>
                        {makeFieldUI()}
                    </div>
    
                
                    <div>
                    <button type="submit" style={{
                    borderRadius: 50, 
                    border:'none', 
                    backgroundColor: 'blue', 
                    color:'white',
                    textAlign: 'center',
                    padding: '10px',
                    margin: '4px',
                    outline: 'none',
                    cursor: 'pointer'
                    }}> Submit</button>
                    </div>
    
                </form>
                </div>
            ) : (
                <p>Thanks for Sharing your value review. We take our feedback system very seriously.</p>
            )}
        </div>
    )
}



function StarRating(props){
    const change = (newStars)=>{
       props.onChange(newStars)
    }

    return (
        <div style={{width:'270px'}}>
            <div className="star-rating">
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
    <div className={selected ? "star selected" : "star"} onClick={onClick} />
  );


Reviewer.propTypes = {
    fieldData: PropTypes.array
};

export default Reviewer;