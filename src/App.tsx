import './styles/sidebar.css';
import './styles/header.css';
import {Sidebar} from './components/Sidebar'
import {Header} from './components/Header'
import {AppRoutes} from './Routers/AppRoutes'
import { BrowserRouter } from 'react-router-dom';
function App() {
 

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Header />
        <main className="main-content">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
