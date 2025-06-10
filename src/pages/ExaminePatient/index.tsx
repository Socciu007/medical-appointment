import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import ButtonComponent from '../../components/ButtonComponent'
import TableComponent from '../../components/TableComponent'
import searchIcon from '/assets/icons/icon-search.svg'
import minusIcon from '/assets/icons/icon-minus.svg'
import plusIcon from '/assets/icons/icon-pluswhite.svg'
import exportIcon from '/assets/icons/icon-excel.svg'
import TabsComponent from '../../components/TabsComponent'
import { useState } from 'react'
import ExamineComponent from '../../components/ExamineComponent'
import downupIcon from '/assets/icons/icon-downup.svg'
import ExamineHead from '../../components/ExamineComponent/head'
import { ProForm } from '@ant-design/pro-form'
import InputComponent from '../../components/InputComponent'
import Exam1 from '../../components/ExamineComponent/exam1'
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
  const [typeExamine, setTypeExamine] = useState(0)
  const handleActiveTab = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className="examine-patient-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          {activeTab === 0 && <HeaderComponent title="Khám bệnh" isShowActions={true} />}
          {activeTab === 1 && <HeaderComponent title="Khám bệnh" isShowInExamine={true} />}
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
                      title="Xuất dữ liệu"
                      icon={exportIcon}
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
                    list={[
                      'Khám bệnh',
                      'Phiếu chỉ định',
                      'Lịch sử thuốc',
                      'Chi tiết khám',
                      'Lịch sử khám'
                    ]}
                    activeIndex={typeExamine}
                    handleActive={(index) => setTypeExamine(index)}
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
                  <ExamineHead />
                  {typeExamine === 0 && (
                    <ProForm
                      layout="horizontal"
                      labelCol={{ span: 4 }}
                      submitter={false}
                    >
                      <InputComponent name="reason" label="Lý do khám" />
                      <InputComponent name="reasonOther" label="Lý do khác" />
                      <InputComponent
                        name="process"
                        label="Quá trình bệnh lý"
                      />
                      <InputComponent
                        name="total"
                        label="Khám tổng quát toàn thân"
                      />
                      <InputComponent name="organ" label="Khám các cơ quan" />
                      <InputComponent
                        name="initial"
                        label="Chuẩn đoán ban đầu"
                      />
                      <InputComponent name="status" label="Tình trạng bệnh" />
                      <div className="info-examine-content-right-btn">
                        <div className="more-item">
                          <p>ICD ban đầu:</p>
                          <div className="more-item-input">
                            <input type="text" name="icd" />
                            <input type="text" name="icd" />
                          </div>
                          <button style={{ backgroundColor: '#22C55E' }}>
                            <img src={plusIcon} alt="plus" />
                          </button>
                        </div>
                        <div className="more-item">
                          <p></p>
                          <div className="more-item-input">
                            <input type="text" name="icd" />
                            <input type="text" name="icd" />
                          </div>
                          <button style={{ backgroundColor: '#FF0000' }}>
                            <img src={minusIcon} alt="minus" />
                          </button>
                        </div>
                        <div className="more-item">
                          <p></p>
                          <div className="more-item-input">
                            <input type="text" name="icd" />
                            <input type="text" name="icd" />
                          </div>
                          <button style={{ backgroundColor: '#FF0000' }}>
                            <img src={minusIcon} alt="minus" />
                          </button>
                        </div>
                      </div>
                    </ProForm>
                  )}
                  {typeExamine === 1 && (
                    <div className="info-examine-content-right-content">
                      <Exam1 />
                    </div>
                  )}
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
