import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
dayjs.locale('en')
import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
  </StrictMode>
)
