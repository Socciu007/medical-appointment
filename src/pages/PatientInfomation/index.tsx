/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.scss'
import { useState, useEffect } from 'react'
import { ProForm } from '@ant-design/pro-form'
import HeaderComponent from '../../components/HeaderComponent'
import InputComponent from '../../components/InputComponent'
import cardBlueIcon from '/assets/icons/icon-card-blue.svg'
import redirectIcon from '/assets/icons/icon-redirect.svg'
import avatarIcon from '/assets/icons/icon-avatar.svg'
import qrCodeIcon from '/assets/icons/icon-qr-code.svg'
import TabsComponent from '../../components/TabsComponent'
import TableComponent from '../../components/TableComponent'
import { useParams } from 'react-router-dom'
import patientRegisterService from '../../services/patientRegisterService'
import { nations } from '../../mocks/nation'
import { jobs } from '../../mocks/jobs'

const columns = [
  {
    title: 'Quan hệ',
    dataIndex: 'relationship',
    key: 'relationship'
  },
  {
    title: 'Họ tên',
    dataIndex: 'contact_name',
    key: 'contact_name'
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender',
    key: 'gender',
    render: (_: any, record: any) => {
      return record?.gender === 1 ? 'Nam' : 'Nữ'
    }
  },
  {
    title: 'Năm sinh',
    dataIndex: 'date_of_birth',
    key: 'date_of_birth'
  },
  {
    title: 'Điện thoại',
    dataIndex: 'contact_phone',
    key: 'contact_phone'
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'contact_address',
    key: 'contact_address'
  },
  {
    title: 'Nơi làm việc',
    dataIndex: 'work_place',
    key: 'work_place'
  }
]

const initialValues = {
  full_name: '',
  date_of_birth: '',
  gender: '',
  phone_number: '',
  full_address: '',
  address: '',
  email: '',
  national_id: '',
  passport: '',
  id_num: '',
  id_issue_date: '',
  id_issue_by: '',
  id_expired_date: '',
  ethnic_id: '',
  religion_id: '',
  career_id: '',
  work_place: '',
  contact_name: '',
  contact_birth_year: '',
  contact_gender: '',
  relationship: '',
  contact_phone: '',
  work_place_address: '',
  contact_address: ''
}

const PatientInfomation = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState(0)
  const [patientInfomation, setPatientInfomation] = useState(initialValues)
  const [patientContact, setPatientContact] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // Fetch patient infomation
  const fetchPatientInfomation = async (id: string) => {
    setIsLoading(true)
    const response = await patientRegisterService.getPatientById(id)
    if (response?.data) {
      setPatientInfomation({
        ...response?.data,
        national_id: nations?.find((nation) => nation.id === response?.data?.national_id)?.label,
        gender: response?.data?.gender === 1 ? 'Nam' : 'Nữ',
        ethnic_id: response?.data?.ethnic_id === 1 ? 'Khác' : 'Không',
        religion_id: response?.data?.religion_id === 1 ? 'Khác' : 'Không',
        career_id: jobs?.find((job) => job.id === response?.data?.career_id)?.label,
        passport: response?.data?.passport_number ? 'CCCD' : ''
      })
    }
    setIsLoading(false)
  }

  // fetch patient contact
  const fetchPatientContact = async (id: string) => {
    const response = await patientRegisterService.getPatientContactById(id)
    console.log('response', response?.data)
    if (response?.data) {
      setPatientContact(response?.data)
    }
  }

  // Set state patient infomation
  useEffect(() => {
    if (id) {
      fetchPatientInfomation(id)
      fetchPatientContact(id)
    }
  }, [id])

  return (
    <div className="patient-infomation-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Thông tin bệnh nhân" />
        </div>
        {/* Content */}
        { !isLoading ? (
          <>
            <TabsComponent list={['Thông tin khách hàng', 'Nhân thân', 'Lịch sử dịch vụ', 'Tổng hợp']} activeIndex={activeTab} handleActive={setActiveTab} />
            {activeTab === 0 && (
              <ProForm
                initialValues={patientInfomation}
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
                            name="vn_ins_code"
                            placeholder=""
                            disabled={true}
                          />
                        </div>
                        <div className="row">
                          <InputComponent
                            label="Đối tượng BH:"
                            name="vn_ins_reg"
                            placeholder=""
                            disabled={true}
                          />
                        </div>
                        <div className="row">
                          <InputComponent
                            label="Tên trên thẻ:"
                            name="full_name"
                            placeholder=""
                            disabled={true}
                          />
                        </div>
                        <div className="row">
                          <InputComponent
                            label="NS trên thẻ:"
                            name="date_of_first_date"
                            placeholder=" "
                            disabled={true}
                          />
                        </div>
                        <div className="row">
                          <InputComponent
                            label="Nơi ĐKKCB:"
                            name="vn_ins_address"
                            placeholder=""
                            disabled={true}
                          />
                        </div>
                        <div className="row">
                          <InputComponent
                            label="Địa chỉ trên thẻ:"
                            name="vn_íns_address"
                            placeholder=""
                            disabled={true}
                          />
                        </div>
                        <div className="row">
                          <InputComponent
                            label="Hiệu thực từ:"
                            name="vn_ins_from"
                            placeholder=""
                            disabled={true}
                          />
                          <InputComponent
                            label="Đến:"
                            name="vn_ins_to"
                            placeholder=""
                            disabled={true}
                          />
                        </div>
                        <div className="row">
                          <InputComponent
                            label="5 năm liên tục:"
                            name="vn_ins_year5"
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
              <TableComponent rowKey="id" columns={columns} dataSource={patientContact} search={false} />
            )}
          </>
        ) : (
          <div className="loading-container">Loading...</div>
        )}
      </div>
    </div>
  )
}

export default PatientInfomation
