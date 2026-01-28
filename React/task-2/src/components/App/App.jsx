import { useEffect, useState } from "react";
import Description from "../Description/Description";
import "./App.css";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    try {
      const loadFromLS = localStorage.getItem("feedback");

      if (loadFromLS !== null) {
        return JSON.parse(loadFromLS);
      }

      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType !== "reset") {
      setFeedbacks({
        ...feedbacks,
        [feedbackType]: feedbacks[feedbackType] + 1,
      });
      return;
    }
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <>
      <Description />

      <Options totalFeedback={totalFeedback} onClick={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
