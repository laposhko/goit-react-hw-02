import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState } from "react";

export default function App() {
  const [counts, setCounts] = useState({
    goodCount: 0,
    neutralCount: 0,
    badCount: 0,
  });
  function handleGoodFeedback() {
    setCounts({ ...counts, goodCount: counts.goodCount + 1 });
  }
  function handleNeutralFeedback() {
    setCounts({ ...counts, neutralCount: counts.neutralCount + 1 });
  }
  function handleBadFeedback() {
    setCounts({ ...counts, badCount: counts.badCount + 1 });
  }
  return (
    <>
      <Description />
      <Options
        onGoodClick={handleGoodFeedback}
        onNeutralClick={handleNeutralFeedback}
        onBadClick={handleBadFeedback}
      />
      <Feedback counts={counts} />
    </>
  );
}
