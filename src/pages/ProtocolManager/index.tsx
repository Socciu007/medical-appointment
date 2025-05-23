import ButtonComponent from '../../components/ButtonComponent'
import HeaderComponent from '../../components/HeaderComponent'
import TableComponent from '../../components/TableComponent'
import searchIcon from '/assets/icons/icon-search.svg'
import './style.scss'

const protocolColumns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    search: false
  },
  {
    title: 'Loại protocol',
    dataIndex: 'type',
    key: 'type',
    valueType: 'select'
  },
  {
    title: 'Tên protocol',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Chuyên khoa',
    dataIndex: 'department',
    key: 'department',
    search: false
  },
  {
    title: 'Phạm vi áp dụng',
    dataIndex: 'scope',
    key: 'scope',
    search: false
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    search: false
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    search: false
  }
]

const ProtocolManager = () => {
  return (
    <div className="protocol-manager-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Danh sách protocol" isShowActions={false} />
        </div>

        {/* Content */}
        <div className="container-content">
          <div className="container-content-header">
            <p>Tìm kiếm</p>
          </div>
          <TableComponent
            rowKey="id"
            columns={protocolColumns}
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

export default ProtocolManager