/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import TableComponent from '../../components/TableComponent'
import ButtonComponent from '../../components/ButtonComponent'
import saveIcon from '/assets/icons/icon-save.svg'
import searchIcon from '/assets/icons/icon-search.svg'
import { useNavigate } from 'react-router-dom'
import appointmentService from '../../services/appointmentService'
import { useEffect, useState } from 'react'
import { Spin } from 'antd'

const appointmentColumns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    search: false
  },
  {
    title: 'Nguồn',
    dataIndex: 'resource_id',
    key: 'resource_id'
  },
  {
    title: 'Họ tên',
    dataIndex: 'customer_name',
    key: 'customer_name'
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'date_of_birth',
    key: 'date_of_birth',
    search: false
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender_id',
    key: 'gender_id',
    search: false,
    render: (_: any, record: any) => {
      return record.gender_id === 1 ? 'Nam' : 'Nữ'
    }
  },
  {
    title: 'SĐT',
    dataIndex: 'customer_phone',
    key: 'customer_phone'
  },
  {
    title: 'Dịch vụ hẹn',
    dataIndex: 'register_type',
    key: 'register_type',
    search: false
  },
  {
    title: 'Bác sĩ hẹn',
    dataIndex: 'doctor',
    key: 'doctor'
  },
  {
    title: 'NV nhận lịch',
    dataIndex: 'emp_received_id',
    key: 'emp_received_id',
    search: false
  },
  {
    title: 'Thời gian đặt',
    dataIndex: 'time_booking',
    key: 'time_booking',
    search: false
  },
  {
    title: 'Thời gian hẹn',
    dataIndex: 'time_appointment',
    key: 'time_appointment',
    valueType: 'date'
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Thời gian xác nhận',
    dataIndex: 'time_accept',
    key: 'time_accept',
    search: false
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note',
    key: 'note',
    search: false
  },
  {
    title: 'Tác vụ',
    dataIndex: 'action',
    key: 'action',
    search: false
  }
]

const AppointmentManager = () => {
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Fetch appointment list
  const fetchAppointments = async () => {
    setIsLoading(true)
    const res = await appointmentService.getAppointments()
    if (res?.data) {
      setAppointments(res.data)
    }
    setIsLoading(false)
  }

  // Set state appointments
  useEffect(() => {
    fetchAppointments()
  }, [])

  return (
    <div className="appointment-manager-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Quản lý đặt lịch" isShowActions={false} />
        </div>

        {/* Content */}
        <div className="container-content">
          <div className="container-content-header">
            <p>Tìm kiếm</p>
            <ButtonComponent
              color="#059669"
              title="Thêm"
              icon={saveIcon}
              onClick={() => navigate('/add-appointment')}
            />
          </div>
          {isLoading ? (
            <div className="loading-container"><Spin /></div>
          ) : (
            <TableComponent
              rowKey="id"
              columns={appointmentColumns}
              rowSelection={{
                type: 'checkbox',
                onChange: (selectedRowKeys, selectedRows) => {
                  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                }
              }}
              dataSource={appointments}
              pagination={false}
              toolBarRender={false}
              search={{
                searchText: 'Tìm kiếm',
                resetText: 'Làm mới',
                className: 'search-form',
                collapsed: false,
                collapseRender: false,
                labelWidth: 100,
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
          )}
        </div>
      </div>
    </div>
  )
}

export default AppointmentManager
