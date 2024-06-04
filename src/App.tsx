import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
    <Navbar/>
     <Router>
      <Routes>
        <Route path='/contact' element={<div>Hello world</div>}/>
      </Routes>
     </Router>

     </>
  )
}

export default App
