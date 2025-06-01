import './style.scss'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ProForm, { type FormInstance } from '@ant-design/pro-form'
import HeaderComponent from '../../components/HeaderComponent'
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'
import SelectDatePicker from '../../components/SelectDatePicker'
import SelectComponent from '../../components/SelectComponent'
import TableComponent from '../../components/TableComponent'

const serviceColumns = [
  {
    title: 'Nhóm dịch vụ',
    dataIndex: 'serviceGroup',
    key: 'serviceGroup'
  },
  {
    title: 'Mã dịch vụ',
    dataIndex: 'serviceCode',
    key: 'serviceCode'
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'serviceName',
    key: 'serviceName'
  },
  {
    title: 'Bác sĩ thực hiện',
    dataIndex: 'doctor',
    key: 'doctor'
  },
  {
    title: 'Tác vụ',
    dataIndex: 'action',
    key: 'action',
    render: () => {
      return <ButtonComponent title="Xóa" color="#B9B9B9" onClick={() => {}} />
    }
  }
]

interface ServiceProps {
  serviceGroup: string
  serviceCode?: string
  serviceName: string
  doctor: string
}

const initialAppointment = {
  emp_received_id: '',
  phone_booking: '',
  time_booking: new Date(),
  resource_id: '',
  referrer: '',
  customer_social: '',
  customer_name: '',
  age:'',
  date_of_birth: new Date(),
  gender_id: '',
  customer_phone: '',
  customer_email: '',
  register_type: '',
  customer_Add: '',
  customer_full_add: '',
  time_appointment: new Date(),
  status: '',
  note: ''
}

const AddAppointment = () => {
  const formRef = useRef<FormInstance>(null)
  const navigate = useNavigate()
  const [serviceData, setServiceData] = useState<ServiceProps[]>([])

  // Handle add service
  const handleAddService = async (values: ServiceProps) => {
    setServiceData([...serviceData, {
      serviceGroup: values.serviceGroup,
      serviceName: values.serviceName,
      doctor: values.doctor
    }])
    return true
  }

  // Handle save appointment
  const handleSaveAppointment = async () => {
    const values = formRef.current?.getFieldsValue()
    console.log(values)
    formRef.current?.resetFields()
  }
  return (
    <div className="add-appointment-page">
      <div className="container">
        <div className="container-header">
          <HeaderComponent title="Đặt lịch hẹn" isShowActions={false} />
        </div>
        <div className="container-content">
          <div className="container-content-header">
            <div className="container-content-header-title">
              <p>Thêm thông tin đặt hẹn</p>
            </div>
            <div className="container-content-header-actions">
              <ButtonComponent title="Thoát" color="#B9B9B9" onClick={() => navigate('/appointment')} />
              <ButtonComponent title="Lưu" color="#10B981" onClick={() => {handleSaveAppointment()}} />
            </div>
          </div>
          {/* Infomation 1 */}
          <div className="container-content-body">
            <div className="container-content-body-title">Thông tin khách hàng đặt hẹn</div>
            <ProForm formRef={formRef} submitter={false} initialValues={initialAppointment}>
              <ProForm.Group>
                <InputComponent label="Nhân viên nhận" name="emp_received_id" placeholder="Nhập tên nhân viên" />
                <InputComponent label="SĐT đặt" name="phone_booking" placeholder="Nhập số điện thoại" />
                <SelectDatePicker label="Thời gian đặt" name="time_booking" placeholder="Chọn thời gian" />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent label="Nguồn" name="resource_id" placeholder="Nhập nguồn" />
                <InputComponent label="Người giới thiệu" name="referrer" placeholder="Nhập người giới thiệu" />
                <InputComponent label="MXH" name="customer_social" placeholder="Nhập MXH" />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent label="Họ tên" name="customer_name" placeholder="Nhập họ tên" />
                <InputComponent label="Tuổi" name="age" placeholder="Nhập tuổi" />
                <InputComponent label="Giới tính" name="gender_id" placeholder="Chọn giới tính" />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent label="SĐT" name="customer_phone" placeholder="Nhập số điện thoại" />
                <InputComponent label="Email" name="customer_email" placeholder="Nhập email" />
                <InputComponent label="Hình thức" name="register_type" placeholder="Chọn hình thức" />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent label="Địa chỉ" name="customer_Add" placeholder="Nhập địa chỉ" />
                <InputComponent label="Địa chỉ HC" name="customer_full_add" placeholder="Nhập địa chỉ HC" />
              </ProForm.Group>
              <ProForm.Group>
                <SelectDatePicker label="Thời gian hẹn" name="time_appointment" placeholder="Chọn thời gian" />
                <SelectComponent options={[]} label="Trạng thái" name="status" placeholder="Chọn trạng thái" />
                <InputComponent label="Ghi chú" name="note" placeholder="Nhập ghi chú" />
              </ProForm.Group>
            </ProForm>
          </div>
          {/* Infomation 2 */}
          <div className="container-content-body border-top">
            <div className="container-content-body-title">Thông tin dịch vụ đặt hẹn</div>
            <ProForm submitter={{
              render: () => {
                return <ButtonComponent title="Thêm dịch vụ" color="#10B981" styleProps={{ width: '120px' }} />
              }
            }} initialValues={{
              serviceData: serviceData
            }} onFinish={async (values: ServiceProps) => {
              await handleAddService(values)
              return true
            }}>
              <ProForm.Group>
                <InputComponent label="Nhóm dịch vụ" name="serviceGroup" placeholder="Nhập nhóm dịch vụ" />
                <InputComponent label="Dịch vụ hẹn" name="serviceName" placeholder="Nhập tên dịch vụ" />
                <InputComponent label="Bác sĩ thực hiện" name="doctor" placeholder="Chọn bác sĩ" />
              </ProForm.Group>
            </ProForm>
            <TableComponent pagination={false} search={false} toolBarRender={false} columns={serviceColumns} dataSource={serviceData} rowKey="id" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAppointment
