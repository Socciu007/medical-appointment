import './style.scss'
import dropDownIcon from '/assets/icons/icon-drop-down.svg'
import saveIcon from '/assets/icons/icon-save.svg'
import refreshIcon from '/assets/icons/icon-reload.svg'
import arrowIcon from '/assets/icons/icon-arrow-right.svg'
import homeIcon from '/assets/icons/icon-home.svg'
import openMenuIcon from '/assets/icons/icon-menu-open.svg'
import addIcon from '/assets/icons/icon-plus.svg'
import ButtonComponent from '../ButtonComponent'
import MenuComponent from '../MenuComponent'
import { useState } from 'react'
type HeaderComponentProps = {
  title: string;
  isShowActions?: boolean;
  isBtnSave?: boolean;
  isBtnPrint?: boolean;
  isBtnRefresh?: boolean;
  isBtnAction?: boolean;
  isBtnAdd?: boolean;
  handleSave?: () => void;
  handleRefresh?: () => void;
  handlePrint?: () => void;
  handleAction?: () => void;
  handleAdd?: () => void;
};

const HeaderComponent = ({
  title,
  isShowActions,
  isBtnSave = true,
  isBtnPrint = true,
  isBtnRefresh = true,
  isBtnAction = true,
  isBtnAdd = false,
  handleSave,
  handleRefresh,
  handlePrint,
  handleAction,
  handleAdd
}: HeaderComponentProps) => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  return (
    <>
      <div className="header-component">
        <div className="header-component-title">
          {!isShowMenu ? (
            <div
              onClick={() => setIsShowMenu(!isShowMenu)}
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <img
                style={{
                  width: '20px',
                  height: '20px',
                  marginBlockEnd: '3px',
                  cursor: 'pointer'
                }}
                src={homeIcon}
                alt="icon-home"
              />
              <h1>Trang chủ</h1>
            </div>
          ) : (
            <div
              onClick={() => setIsShowMenu(!isShowMenu)}
              style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
            >
              <img src={openMenuIcon} alt="icon-menu-open" />
            </div>
          )}
          {
            !isShowMenu && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <img src={arrowIcon} alt="icon-arrow-left" />
                <h1 className="header-component-title-text">{title}</h1>
              </div>
            )
          }
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
            {
              isBtnAdd && (
                <ButtonComponent
                  title="Thêm"
                  icon={addIcon}
                  onClick={handleAdd}
                  color="#059669"
                />
              )
            }
          </div>
        )}
      </div>
      <MenuComponent isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
    </>
  )
}

export default HeaderComponent
