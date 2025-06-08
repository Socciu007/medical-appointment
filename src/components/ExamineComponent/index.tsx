import InputComponent from '../InputComponent'
import './style.scss'

const ExamineComponent = () => {
  return (
    <div className="header">
      <div className="header-right">
        <div className="header-right-title">
          <InputComponent name="code" label="Mã hồ sơ" width={150} />
          <InputComponent name="number" label="Số phiếu khám" width={150} />
          <div className='header-right-title-name'>Lưu Thị Hà - Nữ(15/03/1996)</div>
        </div>
        <div className="header-right-add"><InputComponent name="name" label="Địa chỉ" /></div>
      </div>
      <div className="header-left">
        <div className="header-left-container">
          <div className="header-left-container-title">Sinh hiệu</div>
          <div className='header-left-container-content'>
            <div className='header-left-container-content-item'>
              <InputComponent name="blood_pressure" label="Huyết áp" placeholder='' />
              <InputComponent name="respiratory_rate" label="Nhịp thở" placeholder='' />
            </div>
            <div className='header-left-container-content-item'>
              <InputComponent name="pulse" label="Mạch" placeholder='' />
              <InputComponent name="height" label="Chiều cao" placeholder='' />
            </div>
            <div className='header-left-container-content-item'>
              <InputComponent name="temperature" label="Nhiệt độ" placeholder='' />
              <InputComponent name="weight" label="Cân nặng" placeholder='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamineComponent