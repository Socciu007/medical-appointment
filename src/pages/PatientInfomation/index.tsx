import './style.scss'
import { useState } from 'react'
import { ProForm } from '@ant-design/pro-form'
import HeaderComponent from '../../components/HeaderComponent'
import InputComponent from '../../components/InputComponent'
import cardBlueIcon from '/assets/icons/icon-card-blue.svg'
import redirectIcon from '/assets/icons/icon-redirect.svg'
import avatarIcon from '/assets/icons/icon-avatar.svg'
import qrCodeIcon from '/assets/icons/icon-qr-code.svg'
import TabsComponent from '../../components/TabsComponent'
import TableComponent from '../../components/TableComponent'

const columns = [
  {
    title: 'Quan hệ',
    dataIndex: 'relationship',
    key: 'relationship'
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
    title: 'Năm sinh',
    dataIndex: 'date_of_birth',
    key: 'date_of_birth'
  },
  {
    title: 'Điện thoại',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Nơi làm việc',
    dataIndex: 'work_place',
    key: 'work_place'
  }
]

const PatientInfomation = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="patient-infomation-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Thông tin bệnh nhân" />
        </div>
        {/* Content */}
        <TabsComponent list={['Thông tin khách hàng', 'Nhân thân', 'Lịch sử dịch vụ', 'Tổng hợp']} activeIndex={activeTab} handleActive={setActiveTab} />
        {activeTab === 0 && (
          <ProForm
            // initialValues={initialPatient}
            // formRef={formRef}
            className="container-form"
            submitter={false}
        >
          <ProForm.Group>
            {/* Infomation 1 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={cardBlueIcon} alt="icon-card-blue" />
                <h2>Thông tin hành chính</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <InputComponent
                      label="Họ tên:"
                      name="full_name"
                      placeholder="Nhập họ tên"
                      disabled={true}
                    />
                    <InputComponent
                      label="Ngày sinh:"
                      placeholder=""
                      name="date_of_birth"
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Giới tính:"
                      name="gender"
                      placeholder=""
                      disabled={true}
                    />
                    <InputComponent
                      label="Điện thoại:"
                      name="phone_number"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Địa chỉ HC:"
                      name="full_address"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Địa chỉ:"
                      name="address"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Email:"
                      name="email"
                      placeholder=""
                      disabled={true}
                    />
                    <InputComponent
                      label="Quốc tịch:"
                      name="national_id"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="form-1-content-item">
                  <div className="avatar-qr-code">
                    <img src={avatarIcon} alt="icon-avatar" />
                    <div className="qr-code">
                      <img src={qrCodeIcon} alt="icon-qr-code" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Infomation 2 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={redirectIcon} alt="icon-card" />
                <h2>Thông tin bổ sung</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <InputComponent
                      label="Loại giấy tờ:"
                      name="passport"
                      placeholder=""
                      disabled={true}
                    />
                    <InputComponent
                      label="Số CCCD:"
                      name="id_num"
                      placeholder=""
                      disabled={true}
                    />
                    <InputComponent
                      label="Ngày cấp:"
                      name="id_issue_date"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row row-1">
                    <InputComponent
                      label="Nơi cấp:"
                      name="id_issue_by"
                      placeholder=""
                      disabled={true}
                    />
                    <InputComponent
                      label="Thời hạn:"
                      name="id_expired_date"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Dân tộc:"
                      name="ethnic_id"
                      placeholder=""
                      disabled={true}
                    />
                    <InputComponent
                      label="Tôn giáo:"
                      name="religion_id"
                      placeholder=""
                      disabled={true}
                    />
                    <InputComponent
                      label="Nghề nghiệp:"
                      name="career_id"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Nơi làm việc:"
                      name="work_place"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ProForm.Group>
          <ProForm.Group>
            <div className="form-1">
              <div className="form-1-title">
                <img src={cardBlueIcon} alt="icon-blue-card" />
                <h2>Thông tin BHXH</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item" style={{ marginRight: '24px' }}>
                  <div className="row">
                    <InputComponent
                      label="Mã thẻ:"
                      name="card_id"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Đối tượng BH:"
                      name="insurance_object"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Tên trên thẻ:"
                      name="card_name"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="NS trên thẻ:"
                      name="card_birth_date"
                      placeholder=" "
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Nơi ĐKKCB:"
                      name="card_issue_by"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Địa chỉ trên thẻ:"
                      name="card_address"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Hiệu thực từ:"
                      name="card_effective_from"
                      placeholder=""
                      disabled={true}
                    />
                    <InputComponent
                      label="Đến:"
                      name="card_effective_to"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="5 năm liên tục:"
                      name="card_continuous_year"
                      placeholder=""
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            </ProForm.Group>
          </ProForm>
        )}
        {activeTab === 1 && (
          <TableComponent rowKey="id" columns={columns} dataSource={[]} search={false} />
        )}
      </div>
    </div>
  )
}

export default PatientInfomation
