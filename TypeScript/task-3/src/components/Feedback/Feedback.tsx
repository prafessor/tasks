import type { FeedbackTypes } from "../../types";

interface FeedbackProps {
  feedback: FeedbackTypes;
  totalFeedback: number;
  positiveFeedback: number;
}

export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}: FeedbackProps) {
  return (
    <ul>
      {Object.entries(feedback).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
      <li>Total: {totalFeedback}</li>
      <li>Posistive: {positiveFeedback}%</li>
    </ul>
  );
}
