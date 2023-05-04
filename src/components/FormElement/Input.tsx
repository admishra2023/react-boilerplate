import React from "react";

interface InputProps {
  type: string;
  name?: string;
  classes?: string;
  placeholder: string;
  Icon?: React.ElementType;
  errorMsg?: string;
  id?: any;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.ChangeEvent<any>) => void;
  value?: string | number;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  classes,
  placeholder,
  Icon,
  errorMsg,
  id,
  onChange,
  onBlur,
  value,
  ...props
}) => {
  return (
    <div className="input-wrapper relative">
      <input
        type={type}
        name={name}
        className={`${classes} ${Icon && "has-img"}`}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
      />
      {Icon && <Icon className="has-icon" />}
      {errorMsg && <span className="error-msg">{errorMsg}</span>}
    </div>
  );
};

export default Input;
