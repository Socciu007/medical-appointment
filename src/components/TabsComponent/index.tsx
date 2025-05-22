
import { useState } from 'react'
import './style.scss'

const TabsComponent = ({ list, activeIndex }: { list: string[], activeIndex: number }) => {
  const [active, setActive] = useState(activeIndex)
  return (
    <div className="tabs-component">
      {list.map((item, index) => (
        <div
          className={`tabs-component-item ${active === index ? 'active' : ''}`}
          key={index}
          onClick={() => setActive(index)}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}

export default TabsComponent