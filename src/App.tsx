import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { routes } from './routes'

function App() 
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Page = route.page
          const Main = () => (
            <div className="app">
              <Page />
            </div>
          )
          return (
            <Route key={route.path} path={route.path} element={<Main />} />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
