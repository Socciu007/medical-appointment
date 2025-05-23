/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.scss'
import saveIcon from '/assets/icons/icon-save.svg'
import editIcon from '/assets/icons/icon-update.svg'
import deleteIcon from '/assets/icons/icon-delete.svg'
import HeaderComponent from '../../components/HeaderComponent'
import TableComponent from '../../components/TableComponent'
import ButtonComponent from '../../components/ButtonComponent'
import searchIcon from '/assets/icons/icon-search.svg'
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
    search: false,
    render: () => [
      <div className="action-container" key='edit'>
        <img src={editIcon} alt="editable" />
      </div>,
      <div className="action-container" key='delete'>
        <img src={deleteIcon} alt="deletable" />
      </div>
    ]
  }
]

const PatientManager = () => {
  return (
    <div className="patient-manager-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Danh sách tiếp nhận" isShowActions={false} />
        </div>

        {/* Content */}
        <div className="container-content">
          <div className="container-content-header">
            <p>Tìm kiếm</p>
            <ButtonComponent
              color="#059669"
              title="Thêm"
              onClick={() => {}}
              icon={saveIcon}
            />
          </div>
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

export default PatientManager
