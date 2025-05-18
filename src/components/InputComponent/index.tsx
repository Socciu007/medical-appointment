import type { FieldProps } from '@ant-design/pro-form/es/typing'
import type { InputRef, InputProps } from 'antd'
import './style.scss'
import { ProFormText } from '@ant-design/pro-form'

type InputComponentProps = {
  name: string;
  label: string;
  placeholder: string;
  width?: number;
  inputProps?: Partial<FieldProps<InputRef> & InputProps>;
};

const InputComponent = ({ name, label, placeholder, width, inputProps, ...props }: InputComponentProps) => {
  return (
    <ProFormText
      className="input-component"
      name={name}
      label={label}
      placeholder={placeholder}
      width={width}
      fieldProps={inputProps}
      {...props}
    />
  )
}

export default InputComponent
