import { ProForm, ProFormCheckbox } from '@ant-design/pro-form'
import './style.scss'
import cardIcon from '/assets/icons/icon-card.svg'
import redirectIcon from '/assets/icons/icon-redirect.svg'
import contactIcon from '/assets/icons/icon-contact.svg'
import serviceIcon from '/assets/icons/icon-list-service.svg'
import cardBlueIcon from '/assets/icons/icon-card-blue.svg'
import avatarIcon from '/assets/icons/icon-avatar.svg'
import qrCodeIcon from '/assets/icons/icon-qr-code.svg'
import savedIcon from '/assets/icons/icon-saved.svg'
import watchIcon from '/assets/icons/icon-watch.svg'
import InputComponent from '../../components/InputComponent'
import SelectDatePicker from '../../components/SelectDatePicker'
import SelectComponent from '../../components/SelectComponent'
import HeaderComponent from '../../components/HeaderComponent'
import TableComponent from '../../components/TableComponent'
import { nations } from '../../mocks/nation'
import { genders } from '../../mocks/gender'
import { identification } from '../../mocks/identification'
import { jobs } from '../../mocks/jobs'

const policyColumns = [
  {
    title: 'STT',
    dataIndex: 'id'
  },
  {
    title: 'Tên chính sách',
    dataIndex: 'name'
  },
  {
    title: 'Áp dụng',
    dataIndex: 'apply'
  }
]

const discountColumns = [
  {
    title: 'STT',
    dataIndex: 'id'
  },
  {
    title: 'Chương trình',
    dataIndex: 'program'
  },
  {
    title: 'Số thẻ',
    dataIndex: 'cardNumber'
  },
  {
    title: 'Áp dụng',
    dataIndex: 'apply'
  }
]

const queuePatientColumns = [
  {
    title: 'STT',
    dataIndex: 'id'
  },
  {
    title: 'Phòng thực hiện',
    dataIndex: 'room'
  },
  {
    title: 'BN chờ',
    dataIndex: 'patient'
  },
  {
    title: 'Tổng số',
    dataIndex: 'total'
  }
]

const religionOptions = [
  {
    label: 'Không',
    value: 'none'
  },
  {
    label: 'Khác',
    value: 'other'
  }
]

const ethnicOptions = [
  {
    label: 'Kinh',
    value: 'kinh'
  },
  {
    label: 'Khác',
    value: 'other'
  }
]

const relationOptions = [
  {
    label: 'Bố',
    value: 'father'
  },
  {
    label: 'Mẹ',
    value: 'mother'
  },
  {
    label: 'Vợ chồng',
    value: 'couple'
  },
  {
    label: 'Bạn bè',
    value: 'friend'
  },
  {
    label: 'Khác',
    value: 'other'
  }
]

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
                <img src={cardBlueIcon} alt="icon-card-blue" />
                <h2>Thông tin hành chính</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <InputComponent
                      label="Họ tên:"
                      name="name"
                      placeholder="Nhập họ tên"
                    />
                    <SelectDatePicker
                      label="Ngày sinh:"
                      placeholder="Chọn ngày sinh"
                      name="date"
                    />
                  </div>
                  <div className="row">
                    <SelectComponent
                      label="Giới tính:"
                      name="gender"
                      placeholder="Chọn giới tính"
                      options={genders}
                    />
                    <InputComponent
                      label="Điện thoại:"
                      name="phone"
                      placeholder="Nhập điện thoại"
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Địa chỉ HC:"
                      name="addressHC"
                      placeholder="Nhập địa chỉ HC"
                    />
                  </div>
                  <div className="row row-2">
                    <InputComponent
                      label="Địa chỉ:"
                      name="address"
                      placeholder="Nhập địa chỉ"
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Email:"
                      name="email"
                      placeholder="Nhập email"
                    />
                    <SelectComponent
                      label="Quốc tịch:"
                      name="nationality"
                      placeholder="Chọn quốc tịch"
                      options={nations}
                    />
                  </div>
                </div>
                <div className="form-1-content-item">
                  <div className="avatar-qr-code">
                    <img src={avatarIcon} alt="icon-avatar" />
                    <div className="qr-code">
                      <img src={qrCodeIcon} alt="icon-qr-code" />
                    </div>
                  </div>
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
                      options={identification}
                    />
                    <InputComponent
                      label="Số CCCD:"
                      name="numberCCCD"
                      placeholder="Nhập số CCCD"
                    />
                    <SelectDatePicker
                      label="Ngày cấp:"
                      name="dateCCCD"
                      placeholder="Chọn ngày cấp"
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
                    />
                  </div>
                  <div className="row">
                    <SelectComponent
                      label="Dân tộc:"
                      name="ethnic"
                      placeholder="Chọn dân tộc"
                      options={ethnicOptions}
                    />
                    <SelectComponent
                      label="Tôn giáo:"
                      name="religion"
                      placeholder="Chọn tôn giáo"
                      options={religionOptions}
                    />
                    <SelectComponent
                      label="Nghề nghiệp:"
                      name="job"
                      placeholder="Chọn nghề nghiệp"
                      options={jobs}
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
                    />
                    <InputComponent
                      label="Năm sinh:"
                      name="relativeBirthYear"
                      placeholder="Nhập năm sinh"
                    />
                    <SelectComponent
                      label="Giới tính:"
                      name="relativeGender"
                      placeholder="Chọn giới tính"
                      options={genders}
                    />
                  </div>
                  <div className="row">
                    <SelectComponent
                      label="Quan hệ:"
                      name="relation"
                      placeholder="Chọn quan hệ"
                      options={relationOptions}
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
                    />
                  </div>
                  <div className="row">
                    <InputComponent
                      label="Địa chỉ:"
                      name="relativeAddress"
                      placeholder="Nhập địa chỉ"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Infomation 4 */}
            <div className="form-1">
              <div className="form-1-title">
                <img src={cardIcon} alt="icon-contact" />
                <h2>Thông tin tiếp nhận</h2>
              </div>
              <div className="form-1-content">
                <div className="form-1-content-item">
                  <div className="row">
                    <SelectDatePicker
                      label="Ngày đăng ký:"
                      name="registerDate"
                      placeholder="Chọn ngày đăng ký"
                    />
                    <SelectComponent
                      label="Đối tượng:"
                      name="object"
                      placeholder="Chọn đối tượng"
                      options={[]}
                    />
                    <SelectComponent
                      label="Hình thức:"
                      name="form"
                      placeholder="Chọn hình thức"
                      options={[]}
                    />
                  </div>
                  <div className="row row-4">
                    <SelectComponent
                      label="Nguồn khách:"
                      name="source"
                      placeholder="Chọn nguồn khách"
                      options={[]}
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
                    />
                    <SelectComponent
                      label="Đơn vị BHTN:"
                      name="placeBHTN"
                      placeholder="Chọn đơn vị BHTN"
                      options={[]}
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
                      <ProFormCheckbox name="priority" />
                      <p>Ưu tiên</p>
                    </div>
                    <SelectComponent
                      label="Đối tượng ưu tiên:"
                      name="priorityObject"
                      placeholder="Chọn đối tượng ưu tiên"
                      options={[]}
                    />
                    <div className="priority">
                      <ProFormCheckbox name="paymentAfter" />
                      <p>Thanh toán sau</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProForm.Group>
          <ProForm.Group>
            <div className="form-2">
              <div className="form-2-title">
                <img src={savedIcon} alt="icon-saved" />
                <h2>Chính sách áp dụng</h2>
              </div>
              <TableComponent
                columns={policyColumns}
                search={false}
                dataSource={[]}
                rowKey="id"
                toolBarRender={false}
                pagination={false}
              />
            </div>
            <div className="form-2">
              <div className="form-2-title">
                <img src={savedIcon} alt="icon-saved" />
                <h2>Phiếu giảm giá, thẻ trả trước</h2>
              </div>
              <TableComponent
                columns={discountColumns}
                search={false}
                dataSource={[]}
                rowKey="id"
                toolBarRender={false}
                pagination={false}
              />
            </div>
            <div className="form-2">
              <div className="form-2-title">
                <img src={watchIcon} alt="icon-watch" />
                <h2>Số lượng bệnh nhân chờ</h2>
              </div>
              <TableComponent
                columns={queuePatientColumns}
                search={false}
                dataSource={[]}
                rowKey="id"
                toolBarRender={false}
                pagination={false}
              />
            </div>
          </ProForm.Group>
        </ProForm>
      </div>
    </div>
  )
}

export default PatientReception
