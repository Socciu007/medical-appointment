import type { FieldProps } from '@ant-design/pro-form/es/typing'
import type { InputRef, InputProps } from 'antd'
import type { Rule } from 'antd/es/form'
import './style.scss'
import { ProFormText } from '@ant-design/pro-form'

type InputComponentProps = {
  name: string;
  label: string;
  placeholder?: string;
  width?: number;
  inputProps?: Partial<FieldProps<InputRef> & InputProps>;
  rules?: Rule[];
  required?: boolean;
  disabled?: boolean;
  initialValue?: string;
};

const InputComponent = ({ name, label, placeholder, width, inputProps, rules, required, disabled, initialValue, ...props }: InputComponentProps) => {
  return (
    <ProFormText
      className="input-component"
      name={name}
      label={label}
      placeholder={placeholder}
      width={width}
      fieldProps={inputProps}
      rules={rules}
      required={required}
      disabled={disabled}
      initialValue={initialValue}
      {...props}
    />
  )
}

export default InputComponent
