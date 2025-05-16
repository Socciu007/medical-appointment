/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import TableComponent from '../../components/TableComponent'
import { SearchOutlined } from '@ant-design/icons'
import { Button } from 'antd'
const patientColumns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    search: false
  },
  {
    title: 'PID',
    dataIndex: 'pid'
  },
  {
    title: 'Số BA mạn tính',
    dataIndex: 'number',
    search: false
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
    dataIndex: 'createdAt',
    search: false
  },
  {
    title: 'Ngày tiếp nhận',
    dataIndex: 'receiverDate'
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    search: false
  },
  {
    title: 'Loại',
    dataIndex: 'type'
  },
  {
    title: 'Chuyên khoa',
    dataIndex: 'specialty',
    search: false
  },
  {
    title: 'Bác sĩ khám chính',
    dataIndex: 'mainDoctor',
    search: false
  },
  {
    title: 'Phòng khám chính',
    dataIndex: 'mainRoom',
    search: false
  },
  {
    title: 'NV tiếp nhận',
    dataIndex: 'receiver'
  },
  {
    title: 'NV cập nhật',
    dataIndex: 'updater',
    search: false
  },
  {
    title: 'Ngày cập nhật',
    dataIndex: 'updatedAt',
    search: false
  },
  {
    title: 'Đã thu tiền',
    dataIndex: 'paided',
    search: false
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note',
    search: false
  },
  {
    title: 'Tác vụ',
    dataIndex: 'action',
    search: false
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
            toolBarRender={false}
            search={{
              searchText: 'Tìm kiếm',
              resetText: 'Làm mới',
              className: 'search-form',
              collapsed: false,
              labelWidth: 100,
              collapseRender: false,
              optionRender: (_, props, dom) => {
                return [
                  ...dom.filter((item: any) => item.key !== 'submit'),
                  <Button
                    key="submit"
                    className="search-button"
                    icon={<SearchOutlined />}
                    iconPosition="start"
                    type="primary"
                    onClick={() => {}}
                  >
                    Tìm kiếm
                  </Button>
                ]
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PatientManager
