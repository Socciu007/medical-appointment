import { ProFormDatePicker } from '@ant-design/pro-form'

type SelectDatePickerProps = {
  name: string
  label: string
  width?: number | 'sm' | 'md' | 'lg' | 'xl' | 'xs'
}

const SelectDatePicker = ({ name, label, width }: SelectDatePickerProps) => {
  return (
    <ProFormDatePicker className="select-date-picker" width={width} name={name} label={label} />
  )
}

export default SelectDatePicker