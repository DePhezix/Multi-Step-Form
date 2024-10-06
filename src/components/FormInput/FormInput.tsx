"use client";
import React, { useState } from "react";
import "./FormInput.sass";

interface Props {
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
  className?: string;
  inputName?: string;
  initialField?: string;
}

const FormInput: React.FC<Props> = ({
  label,
  placeholder,
  type,
  required = false,
  className = "",
  inputName = "",
  initialField = "",
}) => {
  const [text, setText] = useState<string>(initialField);
  const [invalid, setInvalid] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setInvalid(false);
  };

  const handleInvalidInput = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInvalid(true);
  };

  return (
    <div className={`form-input ${className ? className : ""}`}>
      <label className="form-input__label">
        <span>{label}</span>
        {invalid && (
          <span className="form-input__error">This field is required</span>
        )}
      </label>
      <input
        className={`form-input__input ${invalid ? "form-input__input--error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={text}
        onChange={handleOnChange}
        required={required}
        onInvalid={handleInvalidInput}
        name={inputName}
      />
    </div>
  );
};

export default FormInput;
