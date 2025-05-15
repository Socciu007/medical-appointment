import HeaderComponent from '../../components/HeaderComponent'
import cardIcon from '/assets/icons/icon-card.svg'
import redirectIcon from '/assets/icons/icon-redirect.svg'
import contactIcon from '/assets/icons/icon-contact.svg'
import serviceIcon from '/assets/icons/icon-list-service.svg'
import InputComponent from '../../components/InputComponent'
import SelectDatePicker from '../../components/SelectDatePicker'
import SelectComponent from '../../components/SelectComponent'
import { ProForm, ProFormCheckbox } from '@ant-design/pro-form'
import './style.scss'

const PatientReception = () => {
  return (
    <div className="patient-reception-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Tiếp nhận" isShowActions={true} />
        </div>

        {/* Content */}
        <ProForm className="container-form" submitter={false}>
          <ProForm.Group>
            {/* Infomation 1 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={cardIcon} alt="icon-card" />
                <h2>Thông tin hành chính</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <InputComponent
                      label="Họ tên:"
                      name="name"
                      placeholder="Nhập họ tên"
                      // width={250}
                    />
                    <SelectDatePicker
                      label="Ngày sinh:"
                      name="date"
                      // width={250}
                    />
                  </div>
                  <div className="row">
                    <SelectComponent
                      label="Giới tính:"
                      name="gender"
                      placeholder="Chọn giới tính"
                      options={[]}
                      // width={250}
                    />
                    <InputComponent
                      label="Điện thoại:"
                      name="phone"
                      placeholder="Nhập điện thoại"
                      // width={250}
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Địa chỉ HC:"
                      name="addressHC"
                      placeholder="Nhập địa chỉ HC"
                      // width={650}
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Địa chỉ:"
                      name="address"
                      placeholder="Nhập địa chỉ"
                      // width={650}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Email:"
                      name="email"
                      placeholder="Nhập email"
                      // width={250}
                    />
                    <SelectComponent
                      label="Quốc tịch:"
                      name="nationality"
                      placeholder="Chọn quốc tịch"
                      options={[]}
                      // width={250}
                    />
                  </div>
                </div>
                <div className="form-1-content-item">
                  <div className="row" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
            {/* Infomation 2 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={redirectIcon} alt="icon-card" />
                <h2>Thông tin bổ sung</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <SelectComponent
                      label="Loại giấy tờ:"
                      name="type"
                      placeholder="Chọn loại giấy tờ"
                      options={[]}
                      // width={184}
                    />
                    <InputComponent
                      label="Số CCCD:"
                      name="numberCCCD"
                      placeholder="Nhập số CCCD"
                      // width={184}
                    />
                    <SelectDatePicker
                      label="Ngày cấp:"
                      name="date"
                      // width={184}
                    />
                  </div>
                  <div className="row row-1">
                    <InputComponent
                      label="Nơi cấp:"
                      name="placeCCCD"
                      placeholder="Nhập nơi cấp"
                    />
                    <InputComponent
                      label="Thời hạn:"
                      name="timeLimitCCCD"
                      placeholder="Nhập thời hạn"
                      // width={184}
                    />
                  </div>
                  <div className="row">
                    <SelectComponent
                      label="Dân tộc:"
                      name="ethnic"
                      placeholder="Chọn dân tộc"
                      options={[]}
                      // width={184}
                    />
                    <SelectComponent
                      label="Tôn giáo:"
                      name="religion"
                      placeholder="Chọn tôn giáo"
                      options={[]}
                      // width={184}
                    />
                    <SelectComponent
                      label="Nghề nghiệp:"
                      name="job"
                      placeholder="Chọn nghề nghiệp"
                      options={[]}
                      // width={184}
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Nơi làm việc:"
                      name="workPlace"
                      placeholder="Nhập nơi làm việc"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Infomation 3 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={contactIcon} alt="icon-contact" />
                <h2>Thông tin người thân</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <InputComponent
                      label="Họ tên:"
                      name="relativeName"
                      placeholder="Nhập họ tên"
                      // width={184}
                    />
                    <InputComponent
                      label="Năm sinh:"
                      name="relativeBirthYear"
                      placeholder="Nhập năm sinh"
                      // width={184}
                    />
                    <SelectComponent
                      label="Giới tính:"
                      name="relativeGender"
                      placeholder="Chọn giới tính"
                      options={[]}
                      // width={184}
                    />
                  </div>
                  <div className="row">
                    <SelectComponent
                      label="Quan hệ:"
                      name="relation"
                      placeholder="Chọn quan hệ"
                      options={[]}
                      // width={184}
                    />
                    <InputComponent
                      label="Điện thoại:"
                      name="relativePhone"
                      placeholder="Nhập điện thoại"
                    />
                    <InputComponent
                      label="Nơi làm việc:"
                      name="relativeWorkPlace"
                      placeholder="Nhập nơi làm việc"
                      // width={184}
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Địa chỉ:"
                      name="relativeAddress"
                      placeholder="Nhập địa chỉ"
                      // width={184}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Infomation 4 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={contactIcon} alt="icon-contact" />
                <h2>Thông tin tiếp nhận</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <SelectDatePicker
                      label="Ngày đăng ký:"
                      name="registerDate"
                      // width={184}
                    />
                    <SelectComponent
                      label="Đối tượng:"
                      name="object"
                      placeholder="Chọn đối tượng"
                      options={[]}
                      // width={184}
                    />
                    <SelectComponent
                      label="Hình thức:"
                      name="form"
                      placeholder="Chọn hình thức"
                      options={[]}
                      // width={184}
                    />
                  </div>
                  <div className="row row-4">
                    <SelectComponent
                      label="Nguồn khách:"
                      name="source"
                      placeholder="Chọn nguồn khách"
                      options={[]}
                      // width={184}
                    />
                    <InputComponent
                      label="Giới thiệu:"
                      name="introduce"
                      placeholder="Nhập người giới thiệu"
                    />
                  </div>
                  <div className="row row-4 row-checkbox">
                    <ProFormCheckbox
                      label="Có BHTN:"
                      name="hasBHTN"
                      placeholder="Chọn có BHTN"
                      // width={184}
                    />
                    <SelectComponent
                      label="Đơn vị BHTN:"
                      name="placeBHTN"
                      placeholder="Chọn đơn vị BHTN"
                      options={[]}
                      // width={184}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Infomation 5 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={serviceIcon} alt="icon-service" />
                <h2>Đăng ký dịch vụ</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <InputComponent
                      label="Lý do:"
                      name="reason"
                      placeholder="Nhập lý do"
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Ghi chú tiếp đón:"
                      name="note"
                      placeholder="Nhập ghi chú tiếp đón"
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Dịch vụ:"
                      name="service"
                      placeholder="Nhập dịch vụ"
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Phòng:"
                      name="room"
                      placeholder="Nhập phòng"
                    />
                  </div>
                  <div className="add-info">
                    <div className="priority">
                      <ProFormCheckbox
                        name="priority"
                      />
                      <p>Ưu tiên</p>
                    </div>
                    <SelectComponent
                      label="Đối tượng ưu tiên:"
                      name="priorityObject"
                      placeholder="Chọn đối tượng ưu tiên"
                      options={[]}
                      // width={184}
                    />
                    <div className="priority">
                      <ProFormCheckbox
                        name="paymentAfter"
                      />
                      <p>Thanh toán sau</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProForm.Group>
          <ProForm.Group>
            <div className="form-2">HHHH</div>
          </ProForm.Group>
        </ProForm>
      </div>
    </div>
  );
}

export default PatientReception
