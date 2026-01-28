export default function Options({ totalFeedback, onClick }) {
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
          reset
        </button>
      )}
    </div>
  );
}
