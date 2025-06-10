import { Steps, Select, Popover } from 'antd'
import type { StepsProps } from 'antd'

const ExamineHead = () => {
  // Custom dot for steps
  const customDot: StepsProps['progressDot'] = (dot) => (
    <Popover content={false}>{dot}</Popover>
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
        // current={1}
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
