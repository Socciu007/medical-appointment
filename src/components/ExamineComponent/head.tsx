import { Steps, Select, Popover } from 'antd'
import type { StepsProps } from 'antd'
import './style.scss'

const ExamineHead = ({ current, setCurrent }: { current: number; setCurrent: (current: number) => void }) => {
  // Custom dot for steps
  const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    console.log(status, index),
    <Popover content={false}>
      <div className="custom-dot" onClick={() => setCurrent(index)}>
        {dot}
      </div>
    </Popover>
  )
  return (
    <div className="info-examine-content-right-step">
      <div>
        <Select
          showSearch
          placeholder="Tên Protocol"
          style={{ width: 150, textAlign: 'start' }}
          optionFilterProp="label"
          onChange={() => {}}
          onSearch={() => {}}
          options={[
            {
              label: 'Protocol 1',
              value: 'protocol1'
            },
            {
              label: 'Protocol 2',
              value: 'protocol2'
            }
          ]}
        />
      </div>
      <Steps
        current={current}
        size="small"
        progressDot={customDot}
        labelPlacement="horizontal"
        items={[
          {
            title: 'Khảo sát'
          },
          {
            title: 'Khám tổng quát'
          },
          {
            title: 'Khám chuyên sâu'
          },
          {
            title: 'Chỉ định CLS'
          },
          {
            title: 'Kết quả CLS'
          },
          {
            title: 'Guidelin điều trị'
          },
          {
            title: 'Kết luận'
          },
          {
            title: 'Chăm sóc'
          }
        ]}
      />
    </div>
  )
}

export default ExamineHead
