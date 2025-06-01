import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Toast from './components/Toast'


function App() {

  return (
    <Router>    
      <Routes>
     <Route path='/' element={<Home />}  />
          <Route path='/toast' element={<Toast />}  />
     </Routes>
     </Router>

  )     
}

export default App
