import React from "react";
import css from "./Statistics.module.css"




const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <ul className={css.statistics}>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Positive feedback:{positivePercentage} %</li>
        </ul>
    )
};

   
export default Statistics;