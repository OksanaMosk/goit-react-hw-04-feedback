import React from 'react';
import css from "./FeedbackOptions.module.css"


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.feedbackButtons}>
            {options.map(option => (
            <button
               type="button"
               key={option}
               className={css.button}
               onClick={() => onLeaveFeedback(option)} >
           { option }
            </button>
            )           
    )
}      
        </div>
    );
    };



    export default FeedbackOptions;