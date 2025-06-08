import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import ButtonComponent from '../../components/ButtonComponent'
import TableComponent from '../../components/TableComponent'
import searchIcon from '/assets/icons/icon-search.svg'
import TabsComponent from '../../components/TabsComponent'
import { useState } from 'react'
import ExamineComponent from '../../components/ExamineComponent'
import downupIcon from '/assets/icons/icon-downup.svg'
import { Steps, Popover } from 'antd'
import type { StepsProps } from 'antd'

const examineColumns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    search: false
  },
  {
    title: 'Mã hồ sơ',
    dataIndex: 'profileCode',
    key: 'profileCode'
  },
  {
    title: 'Họ tên',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender',
    key: 'gender'
  },
  {
    title: 'SĐT',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Đối tượng',
    dataIndex: 'object',
    key: 'object'
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Chuẩn đoán',
    dataIndex: 'diagnosis',
    key: 'diagnosis'
  },
  {
    title: 'Bác sĩ khám',
    dataIndex: 'doctor',
    key: 'doctor'
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Tác vụ',
    dataIndex: 'action',
    key: 'action',
    search: false
  }
]

const ExaminePatient = () => {
  const [activeTab, setActiveTab] = useState(0)
  const handleActiveTab = (index: number) => {
    setActiveTab(index)
  }

  // Custom dot for steps
  const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );
  return (
    <div className="examine-patient-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Khám bệnh" />
        </div>

        {/* Content */}
        <div className="container-content">
          <TabsComponent
            list={[
              'Danh sách khám bệnh ngoại trú',
              'Chi tiết thông tin ngoại trú'
            ]}
            activeIndex={activeTab}
            handleActive={handleActiveTab}
          />
          {activeTab === 0 && (
            <>
              <div className="container-content-header">
                <p>Tìm kiếm</p>
              </div>
              <TableComponent
                rowKey="id"
                columns={examineColumns}
                rowSelection={{
                  onChange: (selectedRowKeys, selectedRows) => {
                    console.log(
                      `selectedRowKeys: ${selectedRowKeys}`,
                      'selectedRows: ',
                      selectedRows
                    )
                  }
                }}
                dataSource={[]}
                pagination={false}
                toolBarRender={() => {
                  return [
                    <ButtonComponent
                      color="#10B981"
                      title="Thêm mới"
                      icon={searchIcon}
                      styleProps={{ width: 100 }}
                      onClick={() => {}}
                    />
                  ]
                }}
                search={{
                  searchText: 'Tìm kiếm',
                  resetText: 'Làm mới',
                  className: 'search-form',
                  collapsed: false,
                  labelWidth: 100,
                  collapseRender: false,
                  optionRender: () => {
                    return [
                      <ButtonComponent
                        color="#10B981"
                        title="Tìm kiếm"
                        icon={searchIcon}
                        styleProps={{ width: 100 }}
                        onClick={() => {}}
                      />
                    ]
                  }
                }}
              />
            </>
          )}
          {activeTab === 1 && (
            <div className="info-examine">
              <div className="info-examine-header">
                <ExamineComponent />
              </div>
              <div className="info-examine-content">
                <div className="info-examine-content-tab">
                  <TabsComponent
                    list={['Khám bệnh', 'Phiếu chỉ định', 'Lịch sử thuốc', 'Chi tiết khám', 'Lịch sử khám']}
                    activeIndex={0}
                    handleActive={() => {}}
                  />
                  <div className="info-examine-content-tab-btn">
                    <ButtonComponent
                      color="#17C256"
                      title="Khám thêm CK"
                      styleProps={{ width: 100 }}
                      onClick={() => {}}
                    />
                    <ButtonComponent
                      color="#6885E5"
                      title="Chuyển"
                      icon={downupIcon}
                      styleProps={{ width: 75 }}
                      onClick={() => {}}
                    />
                    <ButtonComponent
                      color="#6885E5"
                      title="Tác vụ"
                      icon={downupIcon}
                      styleProps={{ width: 75 }}
                      onClick={() => {}}
                    />
                  </div>
                </div>
                <div className="info-examine-content-right">
                  <div className="info-examine-content-right-header"></div>
                  <div className='info-examine-content-right-step'>
                    <Steps
                      // current={1}
                      progressDot={customDot}
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExaminePatient
