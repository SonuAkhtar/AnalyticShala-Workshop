import "./select.css";

const Select = (props) => {
  const {
    name,
    value,
    onChange,
    defaultOption,
    options,
    errorName,
    errorText,
  } = props;

  return (
    <div className={`select__wrapper ${errorName === name && "error"}`}>
      <select
        name={name || "select"}
        value={value || ""}
        onChange={onChange || ""}
      >
        <option value="" hidden>
          {defaultOption || "Select a value"}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <span className="input__error">{errorText}</span>
    </div>
  );
};

export default Select;
