/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.scss'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProForm, { type FormInstance } from '@ant-design/pro-form'
import HeaderComponent from '../../components/HeaderComponent'
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'
import SelectDatePicker from '../../components/SelectDatePicker'
import SelectComponent from '../../components/SelectComponent'
import TableComponent from '../../components/TableComponent'
import utilsService from '../../services/utilsService'
import appointmentService from '../../services/appointmentService'
import { genders } from '../../mocks/gender'
import { toast } from 'react-toastify'

interface ServiceProps {
  service_group_id: string;
  serviceCode?: string;
  service_id: string;
  emp_service: string;
}

const initialAppointment = {
  emp_received_id: '',
  phone_booking: '',
  time_booking: new Date(),
  resource_id: '',
  referrer: '',
  customer_social: '',
  customer_name: '',
  age: '',
  date_of_birth: new Date(),
  gender_id: '',
  customer_phone: '',
  customer_email: '',
  register_type: '',
  customer_add: '',
  customer_full_add: '',
  time_appointment: new Date(),
  status: '',
  note: ''
}

interface OptionType {
  label: string;
  value: string;
  id: number;
}

const AddAppointment = () => {
  const formRef = useRef<FormInstance>(null)
  const navigate = useNavigate()
  const [serviceData, setServiceData] = useState<ServiceProps[]>([])
  const [doctors, setDoctors] = useState<OptionType[]>([])
  const [services, setServices] = useState<OptionType[]>([])
  const [fullAddress, setFullAddress] = useState<OptionType[]>([])

  // Service columns
  const serviceColumns = [
    {
      title: 'Nhóm dịch vụ',
      dataIndex: 'service_group_id',
      key: 'service_group_id'
    },
    {
      title: 'Mã dịch vụ',
      dataIndex: 'serviceCode',
      key: 'serviceCode'
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'service_id',
      key: 'service_id'
    },
    {
      title: 'Bác sĩ thực hiện',
      dataIndex: 'emp_service',
      key: 'emp_service'
    },
    {
      title: 'Tác vụ',
      dataIndex: 'action',
      key: 'action',
      render: (_: any, __: any, index: number) => {
        return (
          <ButtonComponent
            title="Xóa"
            color="#B9B9B9"
            onClick={() => handleDeleteService(index)}
          />
        )
      }
    }
  ]

  // Handle delete service
  const handleDeleteService = async (index: number) => {
    const newServiceData = serviceData.filter((_, i) => i !== index)
    setServiceData(newServiceData)
  }

  // Handle add service
  const handleAddService = async (values: ServiceProps) => {
    console.log(values)
    setServiceData([
      ...serviceData,
      {
        service_group_id: values.service_group_id,
        service_id: values.service_id,
        emp_service: values.emp_service
      }
    ])
    return true
  }

  // Handle save appointment
  const handleSaveAppointment = async () => {
    const values = formRef.current?.getFieldsValue()
    const saveData = {
      emp_received_id: typeof values?.emp_received_id === 'number' ? values?.emp_received_id : 0,
      resource_id: typeof values?.resource_id === 'number' ? values?.resource_id : 0,
      referrer: values?.referrer,
      phone_booking: values?.phone_booking,
      time_booking: values?.time_booking,
      customer_id: 0,
      customer_name: values?.customer_name,
      date_of_birth: values?.date_of_birth?.toISOString()?.split('T')[0],
      year_of_birth: new Date(values?.date_of_birth).getFullYear(),
      age:
        new Date().getFullYear() -
        new Date(values?.date_of_birth).getFullYear(),
      gender_id:
        genders.find((item) => item.value === values?.gender_id)?.id || 0,
      customer_phone: values?.customer_phone,
      customer_email: values?.customer_email,
      customer_social: values?.customer_social,
      customer_add: values?.customer_add,
      customer_add_id: fullAddress.find((item) => item.value === values?.customer_full_add)?.id || 0,
      customer_full_add: values?.customer_full_add,
      register_type: values?.register_type,
      time_appointment: values?.time_appointment,
      note: values?.note,
      status: values?.status,
      time_accept: new Date()
      // is_active: true,
      // is_deleted: false
    }
    const response = await appointmentService.createAppointment(saveData)
    console.log('res', response)
    if (response?.status === 200) {
      toast.success('Thêm lịch hẹn thành công')
      formRef.current?.resetFields()
    } else {
      toast.error('Thêm lịch hẹn thất bại')
    }
  }

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await utilsService.getDoctors()
      setDoctors(
        response?.data?.map((item: { full_name: string; id: number }) => ({
          label: item?.full_name,
          value: item?.full_name,
          id: item?.id
        }))
      )
    }
    const fetchServices = async () => {
      const response = await utilsService.getServices()
      setServices(
        response?.data?.map(
          (item: { name: string; id: number }) => ({
            label: item?.name,
            value: item?.name,
            id: item?.id
          })
        )
      )
    }
    fetchDoctors()
    fetchServices()
  }, [])

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
              <ButtonComponent
                title="Thoát"
                color="#B9B9B9"
                onClick={() => navigate('/appointment')}
              />
              <ButtonComponent
                title="Lưu"
                color="#10B981"
                onClick={() => {
                  handleSaveAppointment()
                }}
              />
            </div>
          </div>
          {/* Infomation 1 */}
          <div className="container-content-body">
            <div className="container-content-body-title">
              Thông tin khách hàng đặt hẹn
            </div>
            <ProForm
              formRef={formRef}
              submitter={false}
              initialValues={initialAppointment}
            >
              <ProForm.Group>
                <InputComponent
                  label="Nhân viên nhận"
                  name="emp_received_id"
                  placeholder="Nhập tên nhân viên"
                />
                <InputComponent
                  label="SĐT đặt"
                  name="phone_booking"
                  placeholder="Nhập số điện thoại"
                />
                <SelectDatePicker
                  label="Thời gian đặt"
                  name="time_booking"
                  placeholder="Chọn thời gian"
                />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent
                  label="Nguồn"
                  name="resource_id"
                  placeholder="Nhập nguồn"
                />
                <InputComponent
                  label="Người giới thiệu"
                  name="referrer"
                  placeholder="Nhập người giới thiệu"
                />
                <InputComponent
                  label="MXH"
                  name="customer_social"
                  placeholder="Nhập MXH"
                />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent
                  label="Họ tên"
                  name="customer_name"
                  placeholder="Nhập họ tên"
                />
                <SelectDatePicker
                  label="Ngày sinh"
                  name="date_of_birth"
                  placeholder="Chọn ngày sinh"
                />
                <SelectComponent
                  options={genders}
                  label="Giới tính"
                  name="gender_id"
                  placeholder="Chọn giới tính"
                />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent
                  label="SĐT"
                  name="customer_phone"
                  placeholder="Nhập số điện thoại"
                />
                <InputComponent
                  label="Email"
                  name="customer_email"
                  placeholder="Nhập email"
                />
                <InputComponent
                  label="Hình thức"
                  name="register_type"
                  placeholder="Chọn hình thức"
                />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent
                  label="Địa chỉ"
                  name="customer_add"
                  placeholder="Nhập địa chỉ"
                />
                <SelectComponent
                  options={[]}
                  label="Địa chỉ HC"
                  name="customer_full_add"
                  placeholder="Nhập địa chỉ HC"
                  search={true}
                  request={async ({ keyWords }) => {
                    const response = await utilsService.searchDistrict(
                      keyWords
                    )
                    setFullAddress(response?.data?.map(
                      (item: { full_name: string; id: number }) => ({
                        label: item?.full_name,
                        value: item?.full_name,
                        id: item?.id
                      })
                    ))
                    return response?.data?.map(
                      (item: { full_name: string; id: number }) => ({
                        label: item?.full_name,
                        value: item?.full_name,
                        id: item?.id
                      })
                    )
                  }}
                />
              </ProForm.Group>
              <ProForm.Group>
                <SelectDatePicker
                  label="Thời gian hẹn"
                  name="time_appointment"
                  placeholder="Chọn thời gian"
                />
                <SelectComponent
                  options={[]}
                  label="Trạng thái"
                  name="status"
                  placeholder="Chọn trạng thái"
                />
                <InputComponent
                  label="Ghi chú"
                  name="note"
                  placeholder="Nhập ghi chú"
                />
              </ProForm.Group>
            </ProForm>
          </div>
          {/* Infomation 2 */}
          <div className="container-content-body border-top">
            <div className="container-content-body-title">
              Thông tin dịch vụ đặt hẹn
            </div>
            <ProForm
              submitter={{
                render: () => {
                  return (
                    <ButtonComponent
                      title="Thêm dịch vụ"
                      color="#10B981"
                      styleProps={{ width: '120px' }}
                    />
                  )
                }
              }}
              initialValues={{
                serviceData: serviceData
              }}
              onFinish={async (values: ServiceProps) => {
                await handleAddService(values)
                return true
              }}
            >
              <ProForm.Group>
                <InputComponent
                  label="Nhóm dịch vụ"
                  name="service_group_id"
                  placeholder="Nhập nhóm dịch vụ"
                />
                <SelectComponent
                  label="Dịch vụ hẹn"
                  name="service_id"
                  placeholder="Nhập tên dịch vụ"
                  options={services}
                />
                <SelectComponent
                  label="Bác sĩ thực hiện"
                  name="emp_service"
                  placeholder="Chọn bác sĩ"
                  options={doctors}
                />
              </ProForm.Group>
            </ProForm>
            <TableComponent
              pagination={false}
              search={false}
              toolBarRender={false}
              columns={serviceColumns}
              dataSource={serviceData}
              rowKey="id"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAppointment
