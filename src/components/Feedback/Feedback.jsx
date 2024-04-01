import css from "./Feedback.module.css";
export default function Feedback({
  counts: { goodCount, neutralCount, badCount },
}) {
  let total = goodCount + neutralCount + badCount;
  return (
    <div className={css.feedback}>
      {total == 0 ? (
        <p>No feedback yet</p>
      ) : (
        <ul className={css.list}>
          <li>Good feedback: {goodCount}</li>
          <li>Neutral feedback: {neutralCount}</li>
          <li>Bad feedback: {badCount}</li>
          <li>Total: {total}</li>
          <li>Positive: {((goodCount / total) * 100).toFixed()}%</li>
        </ul>
      )}
    </div>
  );
}
