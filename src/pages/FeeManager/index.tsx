import './style.scss'
import avtIcon from '/assets/icons/icon-avatar.svg'
import qrIcon from '/assets/icons/icon-qr.svg'
import HeaderComponent from '../../components/HeaderComponent'
import ButtonComponent from '../../components/ButtonComponent'
import TableComponent from '../../components/TableComponent'
import searchIcon from '/assets/icons/icon-search.svg'
import exportIcon from '/assets/icons/icon-excel.svg'
import TabsComponent from '../../components/TabsComponent'
import { useState } from 'react'
import ProForm, { ProFormCheckbox, ProFormDigit } from '@ant-design/pro-form'
import InputComponent from '../../components/InputComponent'
import SelectDatePicker from '../../components/SelectDatePicker'
import SelectComponent from '../../components/SelectComponent'

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

const paymentColumns = [
  {
    title: 'Chi phí',
    dataIndex: 'cost',
    key: 'cost'
  },
  {
    title: 'Loại dịch vụ',
    dataIndex: 'service',
    key: 'service'
  },
  {
    title: 'Trọn gói',
    dataIndex: 'package',
    key: 'package'
  },
  {
    title: 'Đơn giá',
    dataIndex: 'unitPrice',
    key: 'unitPrice'
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity',
    key: 'quantity'
  },
  {
    title: 'Thành tiền',
    dataIndex: 'total',
    key: 'total'
  },
  {
    title: 'Giảm giá',
    dataIndex: 'discount',
    key: 'discount'
  },
  {
    title: 'Thanh toán',
    dataIndex: 'total',
    key: 'total'
  },
  {
    title: 'Bảo lãnh',
    dataIndex: 'guarantee',
    key: 'guarantee'
  },
  {
    title: 'BN thanh toán',
    dataIndex: 'payment',
    key: 'payment'
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Tác vụ',
    dataIndex: 'action',
    key: 'action'
  }
]

const FeeManager = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeTabPayment, setActiveTabPayment] = useState(1)

  // Handle active tab
  const handleActiveTab = (index: number) => {
    setActiveTab(index)
  }
  // Handle active tab payment
  const handleActiveTabPayment = (index: number) => {
    setActiveTabPayment(index)
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
          {activeTab === 0 && (
            <>
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
            </>
          )}
          {activeTab === 1 && (
            <>
              <div className="container-content-info">
                <div className="container-content-info-avatar">
                  <img src={avtIcon} alt="avatar" />
                </div>
                <div className="container-content-info-form">
                  <ProForm
                    layout="horizontal"
                    submitter={false}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    className="container-content-info-form-form"
                  >
                    <ProForm.Group>
                      <InputComponent
                        label="Mã tiếp nhận"
                        name="code"
                        placeholder="Nhập mã tiếp nhận"
                      />
                      <InputComponent
                        label="PID"
                        name="pid"
                        placeholder="Nhập PID"
                      />
                      <InputComponent
                        label="Phòng/Bác sĩ"
                        name="doctor"
                        placeholder="Nhập phòng/bác sĩ"
                      />
                    </ProForm.Group>
                    <ProForm.Group>
                      <InputComponent
                        label="Họ tên"
                        name="name"
                        placeholder="Nhập họ tên"
                      />
                      <SelectDatePicker
                        label="Ngày tạo"
                        name="createdAt"
                        placeholder="Nhập ngày tạo"
                      />
                      <InputComponent
                        label="Tên bệnh"
                        name="disease"
                        placeholder="Nhập tên bệnh"
                      />
                    </ProForm.Group>
                    <ProForm.Group>
                      <SelectDatePicker
                        label="Ngày sinh"
                        name="birthday"
                        placeholder="Nhập ngày sinh"
                      />
                      <InputComponent
                        label="NV tiếp nhận"
                        name="receiver"
                        placeholder="Nhập NV tiếp nhận"
                      />
                    </ProForm.Group>
                    <ProForm.Group>
                      <InputComponent
                        label="Xã/Huyện/Tỉnh"
                        name="address"
                        placeholder="Nhập xã/huyện/tỉnh"
                      />
                      <InputComponent
                        label="NV thanh toán"
                        name="payment"
                        placeholder="Nhập NV thanh toán"
                      />
                    </ProForm.Group>
                  </ProForm>
                </div>
              </div>
              <div className="container-content-main">
                <TabsComponent
                  list={[
                    'Tạm ứng',
                    'Thanh toán',
                    'Hủy thanh toán',
                    'Hoàn phí',
                    'Miễn giảm',
                    'Tổng hợp chi phí'
                  ]}
                  activeIndex={activeTabPayment}
                  handleActive={handleActiveTabPayment}
                />
                <div className="container-content-main-form">
                  <ProForm
                    layout="horizontal"
                    submitter={false}
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 16 }}
                    className="container-content-main-form-payment"
                  >
                    <ProForm.Group>
                      <ProFormDigit
                        label="Tổng thanh toán"
                        name="total"
                        placeholder="0"
                      />
                      <ProFormDigit
                        label="Đã tạm ứng"
                        name="total"
                        placeholder="0"
                      />
                      <div className="check-package">
                        <ProFormCheckbox label="" name="isPackage" />
                        <p>Có sử dụng gói</p>
                      </div>
                      <SelectComponent
                        label="Gói áp dụng"
                        name="package"
                        placeholder="Chọn gói"
                        options={[]}
                      />
                    </ProForm.Group>
                    <ProForm.Group>
                      <ProFormDigit
                        label="Tiền thanh toán"
                        name="money"
                        placeholder="0"
                      />
                      <SelectComponent
                        label="Hình thức TT"
                        name="payment"
                        placeholder="Chọn hình thức"
                        options={[]}
                      />
                      <div className="check-guarantee">
                        <ProFormCheckbox label="" name="isGuarantee" />
                        <p>Có bảo lãnh</p>
                      </div>
                      <SelectComponent
                        label="Hãng BH"
                        name="guarantee"
                        placeholder="Chọn hãng BH"
                        options={[]}
                      />
                    </ProForm.Group>
                    <ProForm.Group>
                      <ProFormDigit
                        label="Giảm giá"
                        name="discount"
                        placeholder="0"
                      />
                    </ProForm.Group>
                  </ProForm>
                  <div className="container-content-main-form-qr">
                    <div className="container-content-main-form-qr-qr">
                      <img src={qrIcon} alt="qr" />
                    </div>
                    <div className="container-content-main-form-qr-text">
                      <p>Công ty CP Y dược Vietlife</p>
                      <p>MB Bank: 1966688899</p>
                    </div>
                  </div>
                </div>
                <TableComponent
                  rowKey="id"
                  rowSelection={{
                    onChange: (selectedRowKeys, selectedRows) => {
                      console.log(
                        `selectedRowKeys: ${selectedRowKeys}`,
                        'selectedRows: ',
                        selectedRows
                      )
                    }
                  }}
                  columns={paymentColumns}
                  dataSource={[]}
                  pagination={false}
                  search={false}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeeManager
