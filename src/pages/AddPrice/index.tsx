import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import ProForm from '@ant-design/pro-form'
import InputComponent from '../../components/InputComponent'
import SelectDatePicker from '../../components/SelectDatePicker'
import SelectComponent from '../../components/SelectComponent'
import ButtonComponent from '../../components/ButtonComponent'
import saveIcon from '/assets/icons/icon-save.svg'
import exitIcon from '/assets/icons/icon-exit.svg'
import { useNavigate } from 'react-router-dom'
const AddPrice = () => {
  const navigate = useNavigate()
  return (
    <div className="add-price-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Thêm bảng giá" />
        </div>

        {/* Content */}
        <div className="container-content">
          <ProForm
            layout="horizontal"
            submitter={{
              render: () => {
                return [
                  <ButtonComponent
                    title="Lưu lại"
                    color="#10B981"
                    icon={saveIcon}
                  />,
                  <ButtonComponent
                    title="Thoát"
                    color="#EF4444"
                    icon={exitIcon}
                    onClick={() => navigate('/price')}
                  />
                ]
              }
            }}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 18 }}
          >
            <ProForm.Group>
              <InputComponent
                label="Số quyết định"
                name="number"
                placeholder="Nhập số quyết định"
              />
              <SelectDatePicker
                label="Ngày hiệu lực"
                name="effectiveDate"
                placeholder="Chọn ngày hiệu lực"
              />
              <InputComponent
                label="Site áp dụng"
                name="applySite"
                placeholder="Nhập site áp dụng"
              />
              <InputComponent
                label="Loại giá"
                name="priceType"
                placeholder="Chọn loại giá"
              />
              <InputComponent
                label="Ghi chú nội dung"
                name="note"
                placeholder="Nhập ghi chú nội dung"
              />
              <InputComponent
                label="File đính kèm"
                name="file"
                placeholder="Chọn file đính kèm"
              />
              <SelectComponent
                label="Trạng thái"
                name="status"
                placeholder="Chọn trạng thái"
                options={[{
                  label: 'Chờ xác nhận',
                  value: 'pending'
                }, {
                  label: 'Đã áp dụng',
                  value: 'applied'
                }
                ]}
              />
            </ProForm.Group>
          </ProForm>
        </div>
      </div>
    </div>
  )
}

export default AddPrice
