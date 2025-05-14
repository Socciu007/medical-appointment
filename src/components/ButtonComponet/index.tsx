import './style.scss'
type ButtonComponentProps = {
  title: string
  icon: string
  onClick: () => void
  color: string
}

const ButtonComponent = ({ title, icon, onClick, color }: ButtonComponentProps) => {
  return (
    <div className="button-component">
      <button className="button-component-button" style={{ background: color }} onClick={onClick}>
        <img src={icon} alt={`icon-${icon}`} />
        <span>{title}</span>
      </button>
    </div>
  )
}

export default ButtonComponent
