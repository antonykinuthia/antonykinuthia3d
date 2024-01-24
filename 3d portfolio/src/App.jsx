import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, About, Contact} from './pages'

const App = () => {
  return (
    <main>
       <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contact/>}/>
        </Routes>
       </Router> 
    </main>
  )
}

export default App
