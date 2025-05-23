/* eslint-disable no-unused-vars */
import './style.scss'

interface TabsComponentProps {
  list: string[]
  activeIndex: number
  handleActive: (index: number) => void
}

const TabsComponent = ({ list, activeIndex, handleActive }: TabsComponentProps) => {
  return (
    <div className="tabs-component">
      {list.map((item, index) => (
        <div
          className={`tabs-component-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
          onClick={() => handleActive(index)}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default TabsComponent