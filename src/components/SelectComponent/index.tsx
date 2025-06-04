import { ProFormSelect } from '@ant-design/pro-form'
import type { Rule } from 'antd/es/form'
import type { SelectProps } from 'antd/es/select'
import type { ReactNode } from 'react'
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
  search?: boolean
  request?: (value: { keyWords: string }) => Promise<Option[]>
  required?: boolean
  inputProps?: Partial< SelectProps<unknown, Option> & { searchOnFocus?: boolean | undefined; resetAfterSelect?: boolean | undefined; fetchDataOnSearch?: boolean | undefined; optionItemRender?: ((item: unknown) => ReactNode) | undefined; }>
}

const SelectComponent = ({ name, label, options, placeholder, rules, dependencies, width, required, inputProps, search, request }: SelectComponentProps) => {
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
      fieldProps={inputProps}
      {...(search && { showSearch: true, request })}
    />
  )
}

export default SelectComponent
