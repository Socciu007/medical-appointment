import dropDownIcon from '/assets/icons/icon-drop-down.svg'
import saveIcon from '/assets/icons/icon-save.svg'
import refreshIcon from '/assets/icons/icon-reload.svg'
import arrowIcon from '/assets/icons/icon-arrow-right.svg'
import homeIcon from '/assets/icons/icon-home.svg'
import ButtonComponent from '../ButtonComponent'
import './style.scss'

type HeaderComponentProps = {
  title: string
  isShowActions?: boolean
}

const HeaderComponent = ({ title, isShowActions }: HeaderComponentProps) => {
  return (
    <div className="header-component">
      <div className="header-component-title">
        <img style={{ width: '20px', height: '20px', marginBlockEnd: '3px' }} src={homeIcon} alt="icon-home" />
        <h1>Trang chủ</h1>
        <img src={arrowIcon} alt="icon-arrow-left" />
        <h1 className="header-component-title-text">{title}</h1>
      </div>
      {isShowActions && (
        <div className="header-component-actions">
          <ButtonComponent
            title="Tác vụ"
            icon={dropDownIcon}
            onClick={() => {}}
            color="#6885E5"
          />
          <ButtonComponent
            title="Lưu lại"
            icon={saveIcon}
            onClick={() => {}}
            color="#059669"
          />
          <ButtonComponent
            title="In phiếu"
            icon={saveIcon}
            onClick={() => {}}
            color="#059669"
          />
          <ButtonComponent
            title="Làm mới"
            icon={refreshIcon}
            onClick={() => {}}
            color="#666666"
          />
        </div>
      )}
    </div>
  );
}

export default HeaderComponent
