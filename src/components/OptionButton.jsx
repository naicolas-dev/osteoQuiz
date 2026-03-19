function OptionButton({ label, option, status, disabled, isSelected, onSelect }) {
  return (
    <button
      className={`option-button option-${status} ${isSelected ? "is-selected" : ""}`}
      onClick={onSelect}
      disabled={disabled}
      aria-pressed={isSelected}
      type="button"
    >
      <span className="option-label">{label}</span>
      <span className="option-text">{option}</span>
    </button>
  );
}

export default OptionButton;
