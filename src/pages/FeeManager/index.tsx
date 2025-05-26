import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import ButtonComponent from '../../components/ButtonComponent'
import TableComponent from '../../components/TableComponent'
import searchIcon from '/assets/icons/icon-search.svg'
import exportIcon from '/assets/icons/icon-excel.svg'
import TabsComponent from '../../components/TabsComponent'
import { useState } from 'react'
const feeColumns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    search: false
  },
  {
    title: 'PID',
    dataIndex: 'pid',
    key: 'pid'
  },
  {
    title: 'Mã tiếp nhận',
    dataIndex: 'code',
    key: 'code'
  },
  {
    title: 'Họ tên',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'birthday',
    key: 'birthday',
    valueType: 'date'
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender',
    key: 'gender'
  },
  {
    title: 'Đối tượng',
    dataIndex: 'object',
    key: 'object'
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Trạng thái lượt khám',
    dataIndex: 'status',
    key: 'status'
  }
]

const FeeManager = () => {
  const [activeTab, setActiveTab] = useState(0)
  const handleActiveTab = (index: number) => {
    setActiveTab(index)
  }
  return (
    <div className="fee-manager-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Thanh toán" isShowActions={false} />
        </div>

        {/* Content */}
        <div className="container-content">
          <TabsComponent
            list={[
              'Danh sách chờ',
              'Thanh toán',
              'Lịch sử giao dịch',
              'Đã hoàn thành',
              'Danh sách bảo lãnh',
              'Danh sách hoàn phí',
              'Danh sách miễn giảm',
              'Chi khác',
              'Thu khác'
            ]}
            activeIndex={activeTab}
            handleActive={handleActiveTab}
          />
          <div className="container-content-header">
            <p>Tìm kiếm</p>
          </div>
          <TableComponent
            rowKey="id"
            columns={feeColumns}
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
            toolBarRender={() => [
              <ButtonComponent
                color="#10B981"
                title="Xuất dữ liệu"
                onClick={() => {}}
                icon={exportIcon}
                styleProps={{ width: 100 }}
              />
            ]}
            search={{
              searchText: 'Tìm kiếm',
              resetText: 'Làm mới',
              className: 'search-form',
              collapsed: false,
              labelWidth: 135,
              collapseRender: false,
              optionRender: () => {
                return [
                  <ButtonComponent
                    color="#10B981"
                    title="Tìm kiếm"
                    icon={searchIcon}
                    styleProps={{ width: 100 }}
                    onClick={async () => {}}
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

export default FeeManager
