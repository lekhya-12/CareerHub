import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
function FooterComponent() {
  return (
    <>
    
    <div class="container">
  <footer class="d-flex flex-row justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">Contact us: +91 85937 18364</p>
    <img src="/logo1.jpeg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" style={{ borderRadius: '10%' }}/>
    
    <p class="col-md-4 mb-0 text-body-secondary text-end" >Hyderabad, India</p>
    
  </footer>
</div>
    </>
  )
}
export default FooterComponent
