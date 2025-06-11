import './style.scss'

const AssignCLS = () => {
  return (
    <div className="assign-cls-container">
      {/* Left column */}
      <div className="left-panel">
        {[1, 2, 3].map((_, idx) => (
          <div className="service-group" key={idx}>
            <div className="label">Nhóm dịch vụ: <span>Đã có kết quả</span></div>
            <div>Số phiếu chỉ định:</div>
            <div>Thời gian chỉ định:</div>
            <div>Người chỉ định:</div>
            <div>Khoa - phòng:</div>
          </div>
        ))}
      </div>

      {/* Right content */}
      <div className="right-panel">
        <div className="header-row">
          <div className="header-cell">Nhóm dịch vụ</div>
          <div className="header-cell">Trạng thái: Đã có kết quả</div>
          <div className="header-cell">Phòng thực hiện:</div>
          <div className="header-cell">Thời gian trả kết quả:</div>
        </div>

        <div className="result-content">
          Kết quả dịch vụ hiển thị ở đây
        </div>
      </div>
    </div>
  )
}

export default AssignCLS