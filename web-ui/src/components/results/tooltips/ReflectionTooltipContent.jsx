import React from 'react';

/**
 * A tooltip component containing the reflection labels and various intensity percentages.
 * 
 * @param {Object} props the object properties passed down from its parents
 * @returns the DOM elements to render
 */
function ReflectionTooltipContent(props) {
    return (
        <div>
            <li style={{listStyleType: "none"}}><b>Overall:</b> {(props.scores.score * 100).toFixed(2)}%</li>
            {
                !props.scores.categoryScores ? null :
                Object.keys(props.scores.categoryScores).map((key, index) => {
                    return <li key={index} style={{listStyleType: "none"}}><b>{key.charAt(0).toUpperCase() + key.substr(1)}:</b> {(props.scores.categoryScores[key] * 100).toFixed(2)}%</li>
                })
            }
        </div>
    );
}

export default ReflectionTooltipContent;
