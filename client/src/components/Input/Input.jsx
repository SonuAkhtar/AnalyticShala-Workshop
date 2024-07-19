import "./input.css";

const Input = (props) => {
  const {
    type,
    name,
    placeholder,
    value,
    onChange,
    maxLength,
    errorName,
    errorText,
  } = props;

  return (
    <div className={`input__wrapper ${errorName === name && "error"}`}>
      <input
        type={type || "text"}
        name={name || ""}
        placeholder={placeholder || ""}
        value={value || ""}
        onChange={onChange || ""}
        maxLength={maxLength || ""}
      />

      <span className="input__error">{errorText}</span>
    </div>
  );
};

export default Input;
