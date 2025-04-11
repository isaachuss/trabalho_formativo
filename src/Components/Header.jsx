import React from 'react'
import './Header.css'


function Header() {
    return (
      <div>
        <header className="topo">
          <div className="container">
            <div className="divlogo">
              <div className="img">
                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/293/293434.png" alt="Logo" />
              </div>
              <div className="h1">
                <h1>MUZAAC</h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
}
export default Header