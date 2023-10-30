import React from 'react';
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import css from "./App.module.css";
import Notification from "./Notification/Notification";

export default class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
}

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percent = Math.round(good / result * 100);
    return percent;
 
  }
  
  
  onLeaveFeedback = (option) => {
    this.setState(state=> ({
      [option]: state[option] + 1
    }));
}

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const object= Object.keys(this.state);
    return (

      <div className={css.feedbackEl}>

        <Section title="Please leave feedback" >
          <FeedbackOptions options={object} onLeaveFeedback={this.onLeaveFeedback} />
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
}
