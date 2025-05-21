import './style.scss'
import { ProForm, ProFormCheckbox, type FormInstance } from '@ant-design/pro-form'
import cardIcon from '/assets/icons/icon-card.svg'
import redirectIcon from '/assets/icons/icon-redirect.svg'
import contactIcon from '/assets/icons/icon-contact.svg'
import serviceIcon from '/assets/icons/icon-list-service.svg'
import cardBlueIcon from '/assets/icons/icon-card-blue.svg'
import avatarIcon from '/assets/icons/icon-avatar.svg'
import qrCodeIcon from '/assets/icons/icon-qr-code.svg'
import savedIcon from '/assets/icons/icon-saved.svg'
import watchIcon from '/assets/icons/icon-watch.svg'
import InputComponent from '../../components/InputComponent'
import SelectDatePicker from '../../components/SelectDatePicker'
import SelectComponent from '../../components/SelectComponent'
import HeaderComponent from '../../components/HeaderComponent'
import TableComponent from '../../components/TableComponent'
import { nations } from '../../mocks/nation'
import { genders } from '../../mocks/gender'
import { identification } from '../../mocks/identification'
import { jobs } from '../../mocks/jobs'
import { useEffect, useRef, useState } from 'react'
import utilsService from '../../services/utilsService'

const policyColumns = [
  {
    title: 'STT',
    dataIndex: 'id'
  },
  {
    title: 'Tên chính sách',
    dataIndex: 'name'
  },
  {
    title: 'Áp dụng',
    dataIndex: 'apply'
  }
]

const discountColumns = [
  {
    title: 'STT',
    dataIndex: 'id'
  },
  {
    title: 'Chương trình',
    dataIndex: 'program'
  },
  {
    title: 'Số thẻ',
    dataIndex: 'cardNumber'
  },
  {
    title: 'Áp dụng',
    dataIndex: 'apply'
  }
]

const queuePatientColumns = [
  {
    title: 'STT',
    dataIndex: 'id'
  },
  {
    title: 'Phòng thực hiện',
    dataIndex: 'room'
  },
  {
    title: 'BN chờ',
    dataIndex: 'patient'
  },
  {
    title: 'Tổng số',
    dataIndex: 'total'
  }
]

const religionOptions = [
  {
    label: 'Không',
    value: 'none'
  },
  {
    label: 'Khác',
    value: 'other'
  }
]

const ethnicOptions = [
  {
    label: 'Kinh',
    value: 'kinh'
  },
  {
    label: 'Khác',
    value: 'other'
  }
]

const relationOptions = [
  {
    label: 'Bố',
    value: 'father'
  },
  {
    label: 'Mẹ',
    value: 'mother'
  },
  {
    label: 'Vợ chồng',
    value: 'couple'
  },
  {
    label: 'Bạn bè',
    value: 'friend'
  },
  {
    label: 'Khác',
    value: 'other'
  }
]

const initialPatient = {
  full_name: '', //Patient: string
  date_of_birth: new Date(), //Patient
  gender: '', //Patient: string
  phone_number: '', //Patient
  full_address: '', //Patient: string
  address: '', //Patient
  email: '', //Patient
  national_id: '', //Patient: string
  passport: '', //Patient
  id_num: '', // Số CCCD
  id_issue_date: new Date(), //Ngày cấp
  id_issue_by: '', // Nơi cấp
  id_expired_date: new Date(), //Thời hạn
  ethnic_id: '', //Dân tộc : string
  religion_id: '', //Tôn giáo : string
  career_id: '', //Nghề nghiệp : string
  work_place: '', //Nơi làm việc : string Patient
  contact_name: '', //PatientContact
  contact_birth_year: '', //PatientContact: năm sinh
  contact_gender: '', //PatientContact: giới tính
  relationship: '', //PatientContact: Quan hệ
  contact_phone: '', //PatientContact
  contact_work_place: '', //PatientContact
  contact_address: '', //PatientContact
  register_date: new Date(), //Register : ngày đăng ký
  register_type: 'bhyt', //Register : đối tượng
  request_type: '', //Register : hình thức
  resource_visit: '', //Register : nguồn khách
  resource_user: '', //Register : người giới thiệu
  is_insuarance: false, //Register : có BHTN
  ins_id: '', //Register : đơn vị BHTN
  reason: '', //Register : lý do
  register_note: '', //Register : ghi chú tiếp đón
  user_service: '', //Register : dịch vụ
  dept_service: '', //Register : phòng
  prioritize: false, //Register : ưu tiên
  priority_type: '', //Register : đối tượng ưu tiên
  is_pay_before: false //Register : thanh toán sau
}

const PatientReception = () => {
  const formRef = useRef<FormInstance>(null)
  const [priorityTypes, setPriorityTypes] = useState<{ label: string, value: string }[]>([])

  useEffect(() => {
    const fetchPriorityTypes = async () => {
      const response = await utilsService.getPriorityTypes()
      setPriorityTypes(response?.data?.items?.map((item: { name: string, code: string }) => ({ label: item?.name, value: item?.code })))
    }
    fetchPriorityTypes()
  }, [])

  const handleSave = async () => {
    const values = await formRef.current?.validateFields()
    console.log('values', values)
  }
  return (
    <div className="patient-reception-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Tiếp nhận" isShowActions={true} handleSave={async() => await handleSave()} />
        </div>
        {/* Content */}
        <ProForm initialValues={initialPatient} formRef={formRef} className="container-form" submitter={false}>
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
                      required={true}
                    />
                    <SelectDatePicker
                      label="Ngày sinh:"
                      placeholder="Chọn ngày sinh"
                      name="date_of_birth"
                      required={true}
                    />
                  </div>
                  <div className="row">
                    <SelectComponent
                      label="Giới tính:"
                      name="gender"
                      placeholder="Chọn giới tính"
                      options={genders}
                      required={true}
                    />
                    <InputComponent
                      label="Điện thoại:"
                      name="phone_number"
                      placeholder="Nhập điện thoại"
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Địa chỉ HC:"
                      name="full_address"
                      placeholder="Nhập địa chỉ HC"
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Địa chỉ:"
                      name="address"
                      placeholder="Nhập địa chỉ"
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Email:"
                      name="email"
                      placeholder="Nhập email"
                      rules={[{ type: 'email', message: 'Email không hợp lệ' }]}
                    />
                    <SelectComponent
                      label="Quốc tịch:"
                      name="national_id"
                      placeholder="Chọn quốc tịch"
                      options={nations}
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
                    <SelectComponent
                      label="Loại giấy tờ:"
                      name="passport"
                      placeholder="Chọn loại giấy tờ"
                      options={identification}
                    />
                    <InputComponent
                      label="Số CCCD:"
                      name="id_num"
                      placeholder="Nhập số CCCD"
                    />
                    <SelectDatePicker
                      label="Ngày cấp:"
                      name="id_issue_date"
                      placeholder="Chọn ngày cấp"
                    />
                  </div>
                  <div className="row row-1">
                    <InputComponent
                      label="Nơi cấp:"
                      name="id_issue_by"
                      placeholder="Nhập nơi cấp"
                    />
                    <SelectDatePicker
                      label="Thời hạn:"
                      name="id_expired_date"
                      placeholder="Nhập thời hạn"
                    />
                  </div>
                  <div className="row">
                    <SelectComponent
                      label="Dân tộc:"
                      name="ethnic_id"
                      placeholder="Chọn dân tộc"
                      options={ethnicOptions}
                    />
                    <SelectComponent
                      label="Tôn giáo:"
                      name="religion_id"
                      placeholder="Chọn tôn giáo"
                      options={religionOptions}
                    />
                    <SelectComponent
                      label="Nghề nghiệp:"
                      name="career_id"
                      placeholder="Chọn nghề nghiệp"
                      options={jobs}
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Nơi làm việc:"
                      name="work_place"
                      placeholder="Nhập nơi làm việc"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Infomation 3 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={contactIcon} alt="icon-contact" />
                <h2>Thông tin người thân</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <InputComponent
                      label="Họ tên:"
                      name="contact_name"
                      placeholder="Nhập họ tên"
                    />
                    <InputComponent
                      label="Năm sinh:"
                      name="contact_birth_year"
                      placeholder="Nhập năm sinh"
                      rules={[{ type: 'number', message: 'Năm sinh phải là số' }]}
                    />
                    <SelectComponent
                      label="Giới tính:"
                      name="contact_gender"
                      placeholder="Chọn giới tính"
                      options={genders}
                    />
                  </div>
                  <div className="row">
                    <SelectComponent
                      label="Quan hệ:"
                      name="relationship"
                      placeholder="Chọn quan hệ"
                      options={relationOptions}
                    />
                    <InputComponent
                      label="Điện thoại:"
                      name="contact_phone"
                      placeholder="Nhập điện thoại"
                    />
                    <InputComponent
                      label="Nơi làm việc:"
                      name="contact_work_place"
                      placeholder="Nhập nơi làm việc"
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Địa chỉ:"
                      name="contact_address"
                      placeholder="Nhập địa chỉ"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Infomation 4 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={cardIcon} alt="icon-contact" />
                <h2>Thông tin tiếp nhận</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <SelectDatePicker
                      label="Ngày đăng ký:"
                      name="register_date"
                      placeholder="Chọn ngày đăng ký"
                    />
                    <SelectComponent
                      label="Đối tượng:"
                      name="register_type"
                      placeholder="Chọn đối tượng"
                      options={[{ label: 'BHYT', value: 'bhyt' }, { label: 'Dịch vụ', value: 'service' }]}
                    />
                    <SelectComponent
                      label="Hình thức:"
                      name="request_type"
                      placeholder="Chọn hình thức"
                      options={[
                        { label: 'Khám bệnh thông thường', value: 'normal' },
                        { label: 'Thực hiện dịch vụ', value: 'service' },
                        { label: 'Cấp cứu', value: 'emergency' },
                        { label: 'Điều trị ngoại trú', value: 'outpatient' },
                        { label: 'Nhập viện nội trú', value: 'inpatient' },
                        { label: 'Khác', value: 'other' }
                      ]}
                    />
                  </div>
                  <div className="row row-4">
                    <SelectComponent
                      label="Nguồn khách:"
                      name="resource_visit"
                      placeholder="Chọn nguồn khách"
                      options={[]}
                    />
                    <InputComponent
                      label="Giới thiệu:"
                      name="resource_user"
                      placeholder="Nhập người giới thiệu"
                    />
                  </div>
                  <div className="row row-4 row-checkbox">
                    <ProFormCheckbox
                      label="Có BHTN:"
                      name="is_insuarance"
                      placeholder="Chọn có BHTN"
                    />
                    <SelectComponent
                      label="Đơn vị BHTN:"
                      name="ins_id"
                      placeholder="Chọn đơn vị BHTN"
                      options={[]}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Infomation 5 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={serviceIcon} alt="icon-service" />
                <h2>Đăng ký dịch vụ</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <InputComponent
                      label="Lý do:"
                      name="reason"
                      placeholder="Nhập lý do"
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Ghi chú tiếp đón:"
                      name="register_note"
                      placeholder="Nhập ghi chú tiếp đón"
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Dịch vụ:"
                      name="service"
                      placeholder="Nhập dịch vụ"
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Phòng:"
                      name="room"
                      placeholder="Nhập phòng"
                    />
                  </div>
                  <div className="add-info">
                    <div className="priority">
                      <ProFormCheckbox name="prioritize" />
                      <p>Ưu tiên</p>
                    </div>
                    <SelectComponent
                      label="Đối tượng ưu tiên:"
                      name="priority_type"
                      placeholder="Chọn đối tượng ưu tiên"
                      options={priorityTypes}
                    />
                    <div className="priority">
                      <ProFormCheckbox name="paymentAfter" />
                      <p>Thanh toán sau</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProForm.Group>
          <ProForm.Group>
            <div className="form-2">
              <div className="form-2-title">
                <img src={savedIcon} alt="icon-saved" />
                <h2>Chính sách áp dụng</h2>
              </div>
              <TableComponent
                columns={policyColumns}
                search={false}
                dataSource={[]}
                rowKey="id"
                toolBarRender={false}
                pagination={false}
              />
            </div>
            <div className="form-2">
              <div className="form-2-title">
                <img src={savedIcon} alt="icon-saved" />
                <h2>Phiếu giảm giá, thẻ trả trước</h2>
              </div>
              <TableComponent
                columns={discountColumns}
                search={false}
                dataSource={[]}
                rowKey="id"
                toolBarRender={false}
                pagination={false}
              />
            </div>
            <div className="form-2">
              <div className="form-2-title">
                <img src={watchIcon} alt="icon-watch" />
                <h2>Số lượng bệnh nhân chờ</h2>
              </div>
              <TableComponent
                columns={queuePatientColumns}
                search={false}
                dataSource={[]}
                rowKey="id"
                toolBarRender={false}
                pagination={false}
              />
            </div>
          </ProForm.Group>
        </ProForm>
      </div>
    </div>
  )
}

export default PatientReception
