import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { InputType } from "zlib";

type InputFieldProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (Event: ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  type,
  name,
  value,
  className,
  placeholder,
  onChange,
}: InputFieldProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputField;
