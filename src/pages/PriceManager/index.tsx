import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import ProForm from '@ant-design/pro-form'
import TableComponent from '../../components/TableComponent'
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'
import searchIcon from '/assets/icons/icon-search.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const priceColumns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt'
  },
  {
    title: 'Số quyết định',
    dataIndex: 'number',
    key: 'number'
  },
  {
    title: 'Ngày hiệu lực',
    dataIndex: 'effectiveDate',
    key: 'effectiveDate',
    valueType: 'date'
  },
  {
    title: 'Site áp dụng',
    dataIndex: 'applySite',
    key: 'applySite'
  },
  {
    title: 'Loại giá',
    dataIndex: 'priceType',
    key: 'priceType'
  },
  {
    title: 'Ghi chú nội dung',
    dataIndex: 'note',
    key: 'note'
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action'
  }
]

const PriceManager = () => {
  const navigate = useNavigate()
  const [priceData, setPriceData] = useState([{
    stt: 1,
    number: 'VLG-QDG-2025/01',
    effectiveDate: '2025-06-01',
    applySite: 'Tất cả',
    priceType: 'Dịch vụ',
    note: 'Tháy đổi giá dịch vụ toàn bộ các cơ sở',
    status: 'Chờ xác nhận'
  }])

  // Handle search
  const handleSearch = () => {
    setPriceData([...priceData, {
      stt: priceData.length + 1,
      number: 'VLG-QDG-2025/01',
      effectiveDate: '2025-06-01',
      applySite: 'Tất cả',
      priceType: 'Dịch vụ',
      note: 'Tháy đổi giá dịch vụ toàn bộ các cơ sở',
      status: 'Chờ xác nhận'
    }])
  }
  return (
    <div className="price-manager-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Quản lý bảng giá" isShowActions={true} isBtnAction={false} isBtnPrint={false} isBtnSave={false} isBtnAdd={true} handleAdd={() => navigate('/add-price')} />
        </div>

        {/* Content */}
        <div className="container-content">
          <ProForm
            layout="horizontal"
            submitter={{
              render: () => {
                return (
                  <ButtonComponent
                    title="Tìm kiếm"
                    color="#10B981"
                    icon={searchIcon}
                    styleProps={{ width: '100px' }}
                    onClick={() => handleSearch()}
                  />
                )
              }
            }}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
          >
            <ProForm.Group>
              <InputComponent
                label="Từ khóa tìm kiếm"
                name="keyword"
                placeholder="Tìm kiếm theo quyết định hoặc nội dung"
              />
            </ProForm.Group>
          </ProForm>
          <TableComponent
            columns={priceColumns}
            search={false}
            dataSource={priceData}
            pagination={false}
            toolBarRender={false}
            rowKey="id"
          />
        </div>
      </div>
    </div>
  )
}

export default PriceManager
