import { ProFormDatePicker } from '@ant-design/pro-form'
import './style.scss'

type SelectDatePickerProps = {
  name: string
  label: string
  placeholder: string
  width?: number | 'sm' | 'md' | 'lg' | 'xl' | 'xs'
}

const SelectDatePicker = ({ name, label, width, placeholder }: SelectDatePickerProps) => {
  return (
    <ProFormDatePicker className="select-date-picker" placeholder={placeholder} width={width} name={name} label={label} />
  )
}

export default SelectDatePicker