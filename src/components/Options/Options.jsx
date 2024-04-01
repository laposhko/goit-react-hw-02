import css from "./Options.module.css";

export default function Options({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <>
      <ul className={css.options}>
        <li>
          <button onClick={onGoodClick} type="button">
            Good
          </button>
        </li>
        <li>
          <button onClick={onNeutralClick} type="button">
            Neutral
          </button>
        </li>
        <li>
          <button onClick={onBadClick} type="button">
            Bad
          </button>
        </li>
      </ul>
    </>
  );
}
