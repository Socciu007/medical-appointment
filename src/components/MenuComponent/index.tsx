import './style.scss'
import iconClock from '/assets/icons/icon-clock.svg'
import iconCredit from '/assets/icons/icon-credit.svg'
import iconForm from '/assets/icons/icon-form.svg'
import iconHourGlass from '/assets/icons/icon-hourglass.svg'
import iconProtocol from '/assets/icons/icon-protocol.svg'
import iconListProtocol from '/assets/icons/icon-list-protocol.svg'
import iconMoniter from '/assets/icons/icon-moniter.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

type MenuComponentProps = {
  isShowMenu: boolean
  setIsShowMenu: (isShowMenu: boolean) => void
}

const MenuComponent = ({ isShowMenu, setIsShowMenu }: MenuComponentProps) => {
  const navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState(localStorage.getItem('key-menu') || '')

  // Handle select item in menu
  const handleClickMenu = (type: string) => {
    setIsShowMenu(false)
    if (type === '') {
      navigate('/')
    } else if (type === 'patient') {
      navigate('/patient')
    } else if (type === 'appointment') {
      navigate('/appointment')
    } else if (type === 'examine') {
      navigate('/examine')
    } else if (type === 'protocol') {
      navigate('/protocol')
    } else if (type === 'protocols') {
      navigate('/protocols')
    } else if (type === 'fee') {
      navigate('/fee')
    }
    setSelectedItem(type)
    localStorage.setItem('key-menu', type)
    return
  }
  return (
    <>
      {isShowMenu && (
        <div className="menu-component">
          <div
            className={`menu-component-item ${selectedItem === '' ? 'selected' : ''}`}
            onClick={() => handleClickMenu('')}
          >
            <img src={iconForm} alt="icon-form" />
            <p>Tiếp nhận</p>
          </div>
          <div
            className={`menu-component-item ${selectedItem === 'patient' ? 'selected' : ''}`}
            onClick={() => handleClickMenu('patient')}
          >
            <img src={iconMoniter} alt="icon-moniter" />
            <p>Danh sách tiếp nhận</p>
          </div>
          <div
            className={`menu-component-item ${selectedItem === 'appointment' ? 'selected' : ''}`}
            onClick={() => handleClickMenu('appointment')}
          >
            <img src={iconClock} alt="icon-hourglass" />
            <p>Danh sách đặt hẹn</p>
          </div>
          <div
            className={`menu-component-item ${selectedItem === 'examine' ? 'selected' : ''}`}
            onClick={() => handleClickMenu('examine')}
          >
            <img src={iconHourGlass} alt="icon-hourglass" />
            <p>Danh sách khám bệnh</p>
          </div>
          <div
            className={`menu-component-item ${selectedItem === 'protocol' ? 'selected' : ''}`}
            onClick={() => handleClickMenu('protocol')}
          >
            <img src={iconProtocol} alt="icon-protocol" />
            <p>Cấu hình protocol</p>
          </div>
          <div
            className={`menu-component-item ${selectedItem === 'protocols' ? 'selected' : ''}`}
            onClick={() => handleClickMenu('protocols')}
          >
            <img src={iconListProtocol} alt="icon-list-protocol" />
            <p>Danh sách protocol</p>
          </div>
          <div
            className={`menu-component-item ${selectedItem === 'fee' ? 'selected' : ''}`}
            onClick={() => handleClickMenu('fee')}
          >
            <img src={iconCredit} alt="icon-credit" />
            <p>Danh sách chờ thu phí</p>
          </div>
        </div>
      )}
    </>
  )
}

export default MenuComponent
