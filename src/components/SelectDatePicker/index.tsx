import { ProFormDatePicker } from '@ant-design/pro-form'
import './style.scss'

type SelectDatePickerProps = {
  name: string
  label: string
  placeholder: string
  width?: number | 'sm' | 'md' | 'lg' | 'xl' | 'xs'
  required?: boolean
}

const SelectDatePicker = ({ name, label, width, placeholder, required }: SelectDatePickerProps) => {
  return (
    <ProFormDatePicker className="select-date-picker" placeholder={placeholder} width={width} name={name} required={required} label={label} />
  )
}

export default SelectDatePicker