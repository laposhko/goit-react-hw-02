import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState } from "react";

export default function App() {
  if (!localStorage.getItem("counts")) {
    localStorage.setItem(
      "counts",
      JSON.stringify({
        good: 0,
        neutral: 0,
        bad: 0,
      })
    );
  }
  const [counts, setCounts] = useState(
    JSON.parse(localStorage.getItem("counts"))
  );
  localStorage.setItem("counts", JSON.stringify(counts));
  function updateFeedback(feedbackType) {
    setCounts({ ...counts, [feedbackType]: counts[feedbackType] + 1 });
  }
  function resetFeedback() {
    setCounts({ good: 0, neutral: 0, bad: 0 });
  }
  let totalFeedback = counts.good + counts.neutral + counts.bad;

  return (
    <>
      <Description />
      <Options
        onClick={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback == 0 ? (
        <Notification />
      ) : (
        <Feedback counts={counts} totalFeedback={totalFeedback} />
      )}
    </>
  );
}
