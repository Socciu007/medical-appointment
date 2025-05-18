import './style.scss'
type ButtonComponentProps = {
  title: string
  icon?: string
  onClick: () => void
  color: string
  styleProps?: React.CSSProperties
}

const ButtonComponent = ({ title, icon, onClick, color, styleProps }: ButtonComponentProps) => {
  return (
    <div className="button-component">
      <button className="button-component-button" style={{ background: color, ...styleProps }} onClick={onClick}>
        {icon && <img src={icon} alt={`icon-${icon}`} />}
        <span>{title}</span>
      </button>
    </div>
  )
}

export default ButtonComponent
