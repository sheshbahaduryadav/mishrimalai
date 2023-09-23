import React from 'react'
import logo from '../assets/LOGO.png'

const Contacts = () => {
  return (
    <div>
<footer className="f">
      <div className="ft">
      <div className="fot">
      <h2>Restaurants</h2>
       Mishri Malai<br/> <br/>xyz@mail.com<br/><br/>Everyday 9 AM - 10 PM
      </div>
      <div className="foot">
        <img src={logo} className='a' alt="Misri Malai"/>
        <br/>
        We delivered the best quality<br/>of products.
      </div>
      <div>
        <h2>Instagram</h2>
        <div className="fte">
          <img src="" alt="A" />
          <img src="" alt="B" />
          <img src="" alt="C" />
        </div>
      </div>
      </div>
      <h6>Product by Wing Of Wire</h6>
    </footer>

    </div>
  )
}

export default Contacts