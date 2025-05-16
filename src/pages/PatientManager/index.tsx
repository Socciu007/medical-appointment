import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import TableComponent from '../../components/TableComponent'

const patientColumns = [
  {
    title: 'STT',
    dataIndex: 'stt'
  },
  {
    title: 'PID',
    dataIndex: 'pid'
  },
  {
    title: 'Số BA mạn tính',
    dataIndex: 'number'
  },
  {
    title: 'Mã hồ sơ',
    dataIndex: 'profileCode'
  },
  {
    title: 'Họ tên',
    dataIndex: 'name'
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'birthday'
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender'
  },
  {
    title: 'SĐT',
    dataIndex: 'phone'
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt'
  },
  {
    title: 'Ngày tiếp nhận',
    dataIndex: 'receiverDate'
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address'
  },
  {
    title: 'Loại',
    dataIndex: 'type'
  },
  {
    title: 'Chuyên khoa',
    dataIndex: 'specialty'
  },
  {
    title: 'Bác sĩ khám chính',
    dataIndex: 'mainDoctor'
  },
  {
    title: 'Phòng khám chính',
    dataIndex: 'mainRoom'
  },
  {
    title: 'NV tiếp nhận',
    dataIndex: 'receiver'
  },
  {
    title: 'NV cập nhận',
    dataIndex: 'updater'
  },
  {
    title: 'Ngày cập nhận',
    dataIndex: 'updatedAt'
  },
  {
    title: 'Đã thu tiền',
    dataIndex: 'paided'
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note'
  },
  {
    title: 'Tác vụ',
    dataIndex: 'action'
  }
]

const PatientManager = () => {
  return (
    <div className="patient-manager-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Quản lý bệnh nhân" isShowActions={true} />
        </div>

        {/* Content */}
        <div className="container-content">
          <TableComponent
            rowKey="id"
            columns={patientColumns}
            dataSource={[]}
            pagination={false}
          />
        </div>
      </div>
    </div>
  )
}

export default PatientManager
