import React from "react";

const InputField = ({ label, value, onChange, inputRef }) => {
  return (
    <div className="input-control">
      <label>
        <p>{label}</p>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
};

export default InputField;
