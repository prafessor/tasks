import { useState } from "react";
import Description from "./Description/Description";
import type { FeedbackTypes } from "../types";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState<FeedbackTypes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round(
    (feedback.good / (feedback.good + feedback.bad)) * 100
  );

  const updateFeedback = (feedbackType: keyof FeedbackTypes | "reset") => {
    setFeedback((prevFeedback) => {
      if (feedbackType === "reset") {
        return {
          good: 0,
          neutral: 0,
          bad: 0,
        };
      }

      return {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
    });
  };

  return (
    <>
      <Description />
      <Options onClick={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
