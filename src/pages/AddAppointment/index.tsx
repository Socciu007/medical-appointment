import './style.scss'
import HeaderComponent from '../../components/HeaderComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import ProForm from '@ant-design/pro-form'
import InputComponent from '../../components/InputComponent'
import SelectDatePicker from '../../components/SelectDatePicker'
import SelectComponent from '../../components/SelectComponent'

const AddAppointment = () => {
  const navigate = useNavigate()
  return (
    <div className="add-appointment-page">
      <div className="container">
        <div className="container-header">
          <HeaderComponent title="Đặt lịch hẹn" isShowActions={false} />
        </div>
        <div className="container-content">
          <div className="container-content-header">
            <div className="container-content-header-title">
              <p>Thông tin khách hàng đặt hẹn</p>
            </div>
            <div className="container-content-header-actions">
              <ButtonComponent title="Thoát" color="#B9B9B9" onClick={() => navigate('/appointment-manager')} />
              <ButtonComponent title="Lưu" color="#10B981" onClick={() => {}} />
            </div>
          </div>
          {/* Infomation 1 */}
          <div className="container-content-body">
            <div className="container-content-body-title">Thông tin khách hàng đặt hẹn</div>
            <ProForm submitter={false}>
              <ProForm.Group>
                <InputComponent label="Nhân viên nhận" name="employee" placeholder="Nhập tên nhân viên" />
                <InputComponent label="SĐT đặt" name="phone" placeholder="Nhập số điện thoại" />
                <SelectDatePicker label="Thời gian đặt" name="time" placeholder="Chọn thời gian" />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent label="Nguồn" name="source" placeholder="Nhập nguồn" />
                <InputComponent label="Người giới thiệu" name="referral" placeholder="Nhập người giới thiệu" />
                <InputComponent label="MXH" name="mxh" placeholder="Nhập MXH" />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent label="Họ tên" name="name" placeholder="Nhập họ tên" />
                <InputComponent label="Tuổi" name="age" placeholder="Nhập tuổi" />
                <InputComponent label="Giới tính" name="gender" placeholder="Chọn giới tính" />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent label="SĐT" name="phone" placeholder="Nhập số điện thoại" />
                <InputComponent label="Email" name="email" placeholder="Nhập email" />
                <InputComponent label="Hình thức" name="type" placeholder="Chọn hình thức" />
              </ProForm.Group>
              <ProForm.Group>
                <InputComponent label="Địa chỉ" name="address" placeholder="Nhập địa chỉ" />
                <InputComponent label="Địa chỉ HC" name="addressHC" placeholder="Nhập địa chỉ HC" />
              </ProForm.Group>
              <ProForm.Group>
                <SelectDatePicker label="Thời gian hẹn" name="timeAppointment" placeholder="Chọn thời gian" />
                <SelectComponent options={[]} label="Trạng thái" name="status" placeholder="Chọn trạng thái" />
                <InputComponent label="Ghi chú" name="note" placeholder="Nhập ghi chú" />
              </ProForm.Group>
            </ProForm>
          </div>
          <div className="container-content-body"></div>
        </div>
      </div>
    </div>
  )
}

export default AddAppointment
