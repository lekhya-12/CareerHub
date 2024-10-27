import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom'

function HeaderComponent() {
  const nav=useNavigate()
  return (
    <>
    <div>
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark"
      style={{
        position: 'sticky'
      }}
    >
  <div class="container-fluid">
  
    <a class="navbar-brand" href="#" onClick={()=>{nav('/home')}}>
      <img src="/logo1.jpeg" alt="Logo" width="30" height="24" style={{ borderRadius: '10%' }} class="d-inline-block align-text-top"/> CareerHub</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onClick={()=>{nav('/home')}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" onClick={()=>{nav('/job')}}>Jobs</a>
        </li>       
      </ul>
      <button class="btn btn-outline-success" onClick={()=>{nav('/login')}}>Login</button>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default HeaderComponent