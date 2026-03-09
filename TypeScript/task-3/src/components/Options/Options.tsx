import type { FeedbackTypes } from "../../types";

interface OptionsProps {
  onClick: (feedbackType: keyof FeedbackTypes | "reset") => void;
  totalFeedback: number;
}

export default function Options({ onClick, totalFeedback }: OptionsProps) {
  return (
    <div>
      <button type="button" onClick={() => onClick("good")}>
        Good
      </button>
      <button type="button" onClick={() => onClick("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onClick("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" onClick={() => onClick("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}
