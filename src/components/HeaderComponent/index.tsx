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
  isBtnSave?: boolean
  isBtnPrint?: boolean
  isBtnRefresh?: boolean
  isBtnAction?: boolean
  handleSave?: () => void
  handleRefresh?: () => void
  handlePrint?: () => void
  handleAction?: () => void
}

const HeaderComponent = ({ title, isShowActions, isBtnSave = true, isBtnPrint = true, isBtnRefresh = true, isBtnAction = true, handleSave, handleRefresh, handlePrint, handleAction }: HeaderComponentProps) => {
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
          {isBtnAction && (
            <ButtonComponent
              title="Tác vụ"
              icon={dropDownIcon}
              onClick={handleAction}
              color="#6885E5"
            />
          )}
          {isBtnSave && (
            <ButtonComponent
              title="Lưu lại"
              icon={saveIcon}
              onClick={handleSave}
              color="#059669"
            />
          )}
          {isBtnPrint && (
            <ButtonComponent
              title="In phiếu"
              icon={saveIcon}
              onClick={handlePrint}
              color="#059669"
            />
          )}
          {isBtnRefresh && (
            <ButtonComponent
              title="Làm mới"
              icon={refreshIcon}
              onClick={handleRefresh}
              color="#666666"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default HeaderComponent
