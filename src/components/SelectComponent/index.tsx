import { ProFormSelect } from '@ant-design/pro-form'
import type { Rule } from 'antd/es/form'
import './style.scss'

type Option = {
  label: string
  value: string
}

type SelectComponentProps = {
  name: string
  label: string
  options: Option[]
  placeholder: string
  rules?: Rule[]
  dependencies?: string[]
  width?: number | 'sm' | 'md' | 'lg' | 'xl' | 'xs'
  required?: boolean
}

const SelectComponent = ({ name, label, options, placeholder, rules, dependencies, width, required }: SelectComponentProps) => {
  return (
    <ProFormSelect
      className="select-component"
      name={name}
      label={label}
      options={options}
      placeholder={placeholder}
      dependencies={dependencies}
      rules={rules}
      width={width}
      required={required}
    />
  )
}

export default SelectComponent
