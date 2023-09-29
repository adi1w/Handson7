import React from 'react'
import { Routes , Route, BrowserRouter ,NavLink } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import ContactUs from './ContactUs'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'
import './LinkComponent.css'

const RouteComponent = () => {
  return (
    <>
    <BrowserRouter >
    <div className="links">
            <NavLink className="link" to='/'>Home</NavLink>
            <NavLink className="link" to='/student'>Student</NavLink>
            <NavLink className="link" to='/contactUs'>Contact</NavLink>
      </div>
    
    <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/student' element={<Student/>} />
            <Route path='/contactUs' element= {<ContactUs/>}></Route>    
            <Route path='/addNewstudent' element= {<AddNewStudent/>}></Route>    
            <Route path='/editStudent' element= {<EditStudent/>}></Route>    
        </Routes> 
    </BrowserRouter>
    </>
  )
}

export default RouteComponent