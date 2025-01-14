import React from 'react';

/**
 * Component for the results card radio buttons for picking between sentiment, mood and reflection results.
 * 
 * @param {Object} props component properties passed down from the parent
 * @returns the DOM elements to render
 */
function ResultsRadios(props) {

    return (
        <form className="d-flex">
            <div className="form-check mr-3">
                <input onChange={props.selectAnalysisFeature} type="radio" name="analysisFeatureRadios" id="sentimentRadio" className="form-check-input mt-2" checked={props.activeRadioButton === 0}/>
                <label htmlFor="sentimentRadio" className="form-check-label" style={{fontSize: "1rem"}}>Sentiment</label>
            </div>
            <div className="form-check mr-3">
                <input onChange={props.selectAnalysisFeature} type="radio" name="analysisFeatureRadios" id="moodRadio" className="form-check-input mt-2" checked={props.activeRadioButton === 1}/>
                <label htmlFor="moodRadio" className="form-check-label" style={{fontSize: "1rem"}}>Mood</label>
            </div>
            <div className="form-check mr-3">
                <input onChange={props.selectAnalysisFeature} type="radio" name="analysisFeatureRadios" id="reflectionRadio" className="form-check-input mt-2" checked={props.activeRadioButton === 2}/>
                <label htmlFor="reflectionRadio" className="form-check-label" style={{fontSize: "1rem"}}>Reflection</label>
            </div>
        </form>
    );
}

export default ResultsRadios;
