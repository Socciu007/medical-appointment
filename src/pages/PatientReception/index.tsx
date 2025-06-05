import './style.scss'
import {
  ProForm,
  ProFormCheckbox,
  type FormInstance
} from '@ant-design/pro-form'
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
import patientRegisterService, {
  type RegisterPatientData
} from '../../services/patientRegisterService'
import { generateCode, generatePDF, getRandomSiteCode } from '../../utils'
import { toast } from 'react-toastify'

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
    value: 'none',
    id: 0
  },
  {
    label: 'Khác',
    value: 'other',
    id: 1
  }
]

const ethnicOptions = [
  {
    label: 'Kinh',
    value: 'kinh',
    id: 0
  },
  {
    label: 'Khác',
    value: 'other',
    id: 1
  }
]

const relationOptions = [
  {
    label: 'Bố',
    value: 'father',
    id: 0
  },
  {
    label: 'Mẹ',
    value: 'mother',
    id: 1
  },
  {
    label: 'Vợ chồng',
    value: 'couple',
    id: 2
  },
  {
    label: 'Bạn bè',
    value: 'friend',
    id: 3
  },
  {
    label: 'Khác',
    value: 'other',
    id: 4
  }
]

const registerTypeOptions = [
  { label: 'BHYT', value: 'bhyt', id: 0 },
  { label: 'Dịch vụ', value: 'service', id: 1 }
]

const requestTypeOptions = [
  { label: 'Khám bệnh thông thường', value: 'normal', id: 0 },
  { label: 'Thực hiện dịch vụ', value: 'service', id: 1 },
  { label: 'Cấp cứu', value: 'emergency', id: 2 },
  { label: 'Điều trị ngoại trú', value: 'outpatient', id: 3 },
  { label: 'Nhập viện nội trú', value: 'inpatient', id: 4 },
  { label: 'Khác', value: 'other', id: 5 }
]
const initialPatient = {
  full_name: '',
  date_of_birth: new Date(),
  gender: '',
  phone_number: '',
  full_address: '',
  address: '',
  email: '',
  national_id: '',
  passport: '',
  id_num: '',
  id_issue_date: new Date(),
  id_issue_by: '',
  id_expired_date: new Date(),
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
  contact_address: '',
  register_date: new Date(),
  register_type: 'bhyt',
  request_type: '',
  resource_visit: '',
  resource_user: '',
  is_insuarance: false,
  ins_id: '',
  reason: '',
  register_note: '',
  user_service: '',
  dept_service: '',
  prioritize: false,
  priority_type: '',
  is_pay_before: false
}

interface OptionType {
  label: string
  value: string
  id: number
}

const PatientReception = () => {
  const formRef = useRef<FormInstance>(null)
  const [priorityTypes, setPriorityTypes] = useState<OptionType[]>([])
  const [services, setServices] = useState<OptionType[]>([])
  const [resourceUsers, setResourceUsers] = useState<OptionType[]>([])
  const [resourceTypes, setResourceTypes] = useState<OptionType[]>([])

  useEffect(() => {
    const fetchPriorityTypes = async () => {
      const response = await utilsService.getPriorityTypes()
      setPriorityTypes(
        response?.data?.items?.map(
          (item: { name: string; code: string; id: number }) => ({
            label: item?.name,
            value: item?.code,
            id: item?.id
          })
        )
      )
    }
    const fetchServices = async () => {
      const response = await utilsService.getServices()
      setServices(
        response?.data?.map(
          (item: { name: string; code: string; id: number }) => ({
            label: item?.name,
            value: item?.code,
            id: item?.id
          })
        )
      )
    }
    const fetchResourceUsers = async () => {
      const response = await utilsService.getResourceUsers()
      setResourceUsers(
        response?.data?.map(
          (item: { name: string; code: string; id: number }) => ({
            label: item?.name,
            value: item?.code,
            id: item?.id
          })
        )
      )
    }
    const fetchResourceTypes = async () => {
      const response = await utilsService.getResources()
      setResourceTypes(
        response?.data?.map(
          (item: { name: string; code: string; id: number }) => ({
            label: item?.name,
            value: item?.code,
            id: item?.id
          })
        )
      )
    }
    fetchPriorityTypes()
    fetchServices()
    fetchResourceUsers()
    fetchResourceTypes()
  }, [])

  // Handle save data patient
  const handleSave = async () => {
    const values = await formRef.current?.validateFields()
    if (
      !values ||
      !values.full_name ||
      !values.date_of_birth ||
      !values.gender ||
      !values.phone_number ||
      !values.full_address ||
      !values.register_date ||
      !values.register_type ||
      !values.request_type ||
      !values.resource_visit ||
      !values.reason ||
      !values.service_id
    ) {
      toast.warning('Vui lòng nhập đầy đủ thông tin')
      return
    }
    const data: RegisterPatientData = {
      patient: {
        code: generateCode(getRandomSiteCode()),
        full_name: values.full_name,
        date_of_birth: values.date_of_birth.toISOString().split('T')[0],
        gender:
          genders?.find((item) => item?.value === values?.gender)?.id || 0,
        phone_number: values.phone_number,
        full_address: values.full_address,
        address: values.address,
        email: values.email,
        national_id:
          nations?.find((item) => item?.value === values?.national_id)?.id || 0,
        id_num: values.id_num,
        id_issue_date: values.id_issue_date.toISOString().split('T')[0],
        id_issue_by: values.id_issue_by,
        id_expired_date: values.id_expired_date.toISOString().split('T')[0],
        ethnic_id:
          ethnicOptions?.find((item) => item?.value === values?.ethnic_id)
            ?.id || 0,
        religion_id:
          religionOptions?.find((item) => item?.value === values?.religion_id)
            ?.id || 0,
        career_id:
          jobs?.find((item) => item?.value === values?.career_id)?.id || 0,
        work_place: values.work_place
      },
      register: {
        patient_id: 0,
        register_date: values.register_date.toISOString().split('T')[0],
        register_type:
          registerTypeOptions?.find(
            (item) => item?.value === values?.register_type
          )?.id || 0,
        request_type:
          requestTypeOptions?.find(
            (item) => item?.value === values?.request_type
          )?.id || 0,
        resource_visit:
          resourceTypes?.find(
            (item) => item?.value === values?.resource_visit
          )?.id || 0,
        resource_user:
          resourceUsers?.find(
            (item) => item?.value === values?.resource_user
          )?.id || 0,
        is_insuarance: values.is_insuarance,
        ins_id: parseInt(values.ins_id) || 0,
        reason: values.reason,
        register_note: values.register_note,
        prioritize: values.prioritize,
        priority_type:
          priorityTypes?.find((item) => item?.value === values?.priority_type)
            ?.id || 0
      },
      services: [
        {
          service_id: services?.find((item) => item?.value === values?.service_id)?.id || 0,
          dept_service: parseInt(values.dept_service) || 0,
          is_pay_before: values.is_pay_before,
          reg_num: generateCode(getRandomSiteCode()),
          patient_id: 0,
          register_id: 0
        }
      ],
      contact: {
        contact_name: values.contact_name,
        year_of_birth: parseInt(values.contact_birth_year),
        gender:
          genders?.find((item) => item?.value === values?.contact_gender)?.id ||
          0,
        relationship: values.relationship,
        contact_phone: values.contact_phone,
        work_place_address: values.work_place_address,
        contact_address: values.contact_address
      }
    }
    console.log('RegisterPatientData', data)
    const response = await patientRegisterService.createRegisterPatient(data)
    if (response?.status === 200) {
      toast.success('Đăng ký dịch vụ thành công')
    } else {
      toast.error('Đăng ký dịch vụ thất bại')
    }
  }

  // Handle print patient
  const handlePrint = async () => {
    const values = await formRef.current?.validateFields()
    if (!values || !values.full_name || !values.date_of_birth || !values.gender || !values.phone_number || !values.full_address || !values.address || !values.email || !values.national_id || !values.id_num || !values.id_issue_date || !values.id_issue_by || !values.id_expired_date || !values.ethnic_id || !values.religion_id || !values.career_id || !values.work_place) {
      toast.warning('Vui lòng nhập đầy đủ thông tin')
      return
    }
    const data = {
      'Thông tin bệnh nhân.': {
        'Họ tên': values.full_name,
        'Code': generateCode(getRandomSiteCode()),
        'Ngày sinh': values.date_of_birth.toISOString().split('T')[0],
        'Giới tính': values.gender,
        'Điện thoại': values.phone_number,
        'Địa chỉ HC': values.full_address,
        'Địa chỉ': values.address,
        'Email': values.email,
        'Quốc tịch': values?.national_id,
        'Loại giấy tờ': values.passport,
        'Số CCCD': values.id_num,
        'Ngày cấp': values.id_issue_date.toISOString().split('T')[0],
        'Nơi cấp': values.id_issue_by,
        'Ngày hết hạn': values.id_expired_date.toISOString().split('T')[0],
        'Dân tộc': values.ethnic_id,
        'Tôn giáo': values.religion_id,
        'Nghề nghiệp': values.career_id,
        'Nơi làm việc': values.work_place
      },
      'Thông tin người thân.': {
        'Họ tên': values.contact_name,
        'Năm sinh': parseInt(values.contact_birth_year),
        'Giới tính': values.contact_gender,
        'Quan hệ': values.relationship,
        'Điện thoại': values.contact_phone,
        'Địa chỉ': values.contact_address,
        'Nơi làm việc': values.work_place_address
      },
      'Thông tin đăng ký.': {
        'Ngày đăng ký': values.register_date.toISOString().split('T')[0],
        'Loại đăng ký': values.register_type,
        'Loại yêu cầu': values.request_type,
        'Nguồn khách': values.resource_visit,
        'Người giới thiệu': values.resource_user,
        'Có BHTN': values.is_insuarance,
        'Số BHTN': parseInt(values.ins_id) || 0,
        'Lý do': values.reason || 'Không có lý do',
        'Ghi chú': values.register_note || 'Không có ghi chú',
        'Ưu tiên': values.prioritize,
        'Loại ưu tiên': values.priority_type
      },
      'Thông tin dịch vụ.': {
        'Dịch vụ': values.service_id || 1,
        'Phòng': values.dept_service || 'Phòng khám bệnh',
        'Thanh toán trước': values.is_pay_before
      }
    }
    const pdfBytes = await generatePDF(data)
    const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    window.open(url, '_blank')
  }

  // Handle refresh data
  const handleRefresh = () => {
    return formRef?.current?.resetFields()
  }

  return (
    <div className="patient-reception-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent
            title="Tiếp nhận"
            isShowActions={true}
            handleSave={async () => await handleSave()}
            handlePrint={async () => await handlePrint()}
            handleRefresh={() => handleRefresh()}
          />
        </div>
        {/* Content */}
        <ProForm
          initialValues={initialPatient}
          formRef={formRef}
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
                      required={true}
                    />
                  </div>
                  <div className="row row-2">
                    <SelectComponent
                      label="Địa chỉ HC:"
                      name="full_address"
                      placeholder="Nhập địa chỉ HC"
                      required={true}
                      options={[]}
                      search={true}
                      request={async ({ keyWords }) => {
                        const response = await utilsService.searchDistrict(keyWords)
                        return response?.data?.map((item: { full_name: string; id: number }) => ({
                          label: item?.full_name,
                          value: item?.full_name,
                          id: item?.id
                        }))
                      }}
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
                      placeholder="Chọn thời hạn"
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
                      name="work_place_address"
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
                      required={true}
                    />
                    <SelectComponent
                      label="Đối tượng:"
                      name="register_type"
                      placeholder="Chọn đối tượng"
                      options={registerTypeOptions}
                      required={true}
                    />
                    <SelectComponent
                      label="Hình thức:"
                      name="request_type"
                      placeholder="Chọn hình thức"
                      options={requestTypeOptions}
                      required={true}
                    />
                  </div>
                  <div className="row row-4">
                    <SelectComponent
                      label="Nguồn khách:"
                      name="resource_visit"
                      placeholder="Chọn nguồn khách"
                      options={resourceTypes}
                      required={true}
                    />
                    <SelectComponent
                      label="Giới thiệu:"
                      name="resource_user"
                      placeholder="Nhập người giới thiệu"
                      options={resourceUsers}
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
                      required={true}
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
                    <SelectComponent
                      label="Dịch vụ:"
                      name="service_id"
                      placeholder="Chọn dịch vụ"
                      required={true}
                      options={services}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Phòng:"
                      name="dept_service"
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
                      <ProFormCheckbox name="is_pay_before" />
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
