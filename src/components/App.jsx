
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import css from "./App.module.css";
import Notification from "./Notification/Notification";
import { useState } from 'react';

export default function Counter () {
   const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedbackA = (option) => {

    switch (option) {
      case 'good':
     setGood(prevGood = prevGood + 1);
      break;

  case 'neutral':
     setNeutral(prevNeutral = prevNeutral + 1);
      break;
 
  case 'bad':
     setBad(prevBad =preveBad + 1);
        break;
      
      default:
        return;
    }
    
  
  };

  
 const countTotalFeedback = () => {
    
    const result = good + neutral + bad;
    return result;
}

 
//   onLeaveFeedback = (option) => {
//     this.setState(state=> ({
//       [option]: state[option] + 1
//     }));
//   }
  

 const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    const { good } = state;
    const percent = Math.round(good / result * 100);
    return percent;
 
  }

 
    const {option } = state;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    const object= Object.keys(state);
    return (

      <div className={css.feedbackEl}>

        <Section title="Please leave feedback" >
          <FeedbackOptions options={['good', 'neutral', 'bad'] } onLeaveFeedback={onLeaveFeedback} />
        </Section>

        {total === 0 ? (
          <Notification  message="No feedback given" />
        ) : (
            
        <Section title="Statistics" className={css.feedbackResult}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} />
          </Section>)}
      </div>
    );
        
}
