import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import TableComponent from '../../components/TableComponent'
import ButtonComponent from '../../components/ButtonComponent'
import saveIcon from '/assets/icons/icon-save.svg'
import searchIcon from '/assets/icons/icon-search.svg'
import { useNavigate } from 'react-router-dom'

const appointmentColumns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    search: false
  },
  {
    title: 'Nguồn',
    dataIndex: 'source',
    key: 'source'
  },
  {
    title: 'Họ tên',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
    search: false
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender',
    key: 'gender',
    search: false
  },
  {
    title: 'SĐT',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Dịch vụ hẹn',
    dataIndex: 'service',
    key: 'service',
    search: false
  },
  {
    title: 'Bác sĩ hẹn',
    dataIndex: 'doctor',
    key: 'doctor'
  },
  {
    title: 'NV nhận lịch',
    dataIndex: 'receptionist',
    key: 'receptionist',
    search: false
  },
  {
    title: 'Thời gian đặt',
    dataIndex: 'time',
    key: 'time',
    search: false
  },
  {
    title: 'Thời gian hẹn',
    dataIndex: 'appointmentTime',
    key: 'appointmentTime'
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Thời gian xác nhận',
    dataIndex: 'confirmationTime',
    key: 'confirmationTime',
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
          <TableComponent
            rowKey="id"
            columns={appointmentColumns}
            rowSelection={{
              type: 'checkbox',
              onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
              }
            }}
            dataSource={[]}
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
        </div>
      </div>
    </div>
  )
}

export default AppointmentManager
