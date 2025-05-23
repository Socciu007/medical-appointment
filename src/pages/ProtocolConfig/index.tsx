import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import { ProForm } from '@ant-design/pro-form'
import InputComponent from '../../components/InputComponent'
import SelectComponent from '../../components/SelectComponent'
import TableComponent from '../../components/TableComponent'
import ButtonComponent from '../../components/ButtonComponent'
import searchIcon from '/assets/icons/icon-search.svg'

const protocolColumns = [
  {
    title: 'Loại thông tin',
    dataIndex: 'type',
    key: 'type',
    valueType: 'select'
  },
  {
    title: 'Thứ tự hiển thị',
    dataIndex: 'order',
    key: 'order',
    valueType: 'digit',
    fieldProps: {
      min: 1,
      max: 1000
    }
  },
  {
    title: 'Tên thông tin',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Kiểu dữ liệu',
    dataIndex: 'dataType',
    key: 'dataType',
    valueType: 'select'
  },
  {
    title: 'Cấp thông tin',
    dataIndex: 'level',
    key: 'level'
  },
  {
    title: 'Thông tin cấp trên',
    dataIndex: 'parentInfo',
    key: 'parentInfo'
  },
  {
    title: 'Bắt buộc nhập',
    dataIndex: 'required',
    key: 'required',
    valueType: 'checkbox',
    valueEnum: {
      true: {
        text: ' ',
        status: 'Processing'
      }
    }
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    search: false
  }
]
const ProtocolConfig = () => {
  return (
    <div className="protocol-config-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent
            title="Cấu hình protocol"
            isShowActions={true}
            isBtnAction={false}
            isBtnPrint={false}
            isBtnRefresh={false}
          />
        </div>

        {/* Content */}
        <div className="container-content">
          <ProForm
            layout="horizontal"
            submitter={false}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 17 }}
          >
            <ProForm.Group>
              <InputComponent
                label="Tên protocol"
                name="name"
                placeholder="Nhập tên protocol"
                required={true}
              />
              <SelectComponent
                label="Loại protocol"
                name="name"
                placeholder="Nhập tên protocol"
                required={true}
                options={[]}
              />
            </ProForm.Group>
            <ProForm.Group>
              <InputComponent
                label="Chuyên khoa"
                name="name"
                placeholder="Nhập chuyên khoa"
                required={true}
              />
              <InputComponent
                label="Phạm vi"
                name="name"
                placeholder="Nhập mã chuyên khoa"
                required={true}
              />
            </ProForm.Group>
          </ProForm>
          <TableComponent
            columns={protocolColumns}
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
            dataSource={[]}
            pagination={false}
            toolBarRender={false}
            rowKey="id"
          />
        </div>
      </div>
    </div>
  )
}

export default ProtocolConfig
