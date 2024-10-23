import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          {/* Logo usando FontAwesome */}
          <NavLink className="navbar-brand" to="/">
            <i className="fas fa-car me-2" style={{ color: 'white', fontSize: '1.5rem' }}></i>
            COCHES
          </NavLink>
          
          {/* Botón de hamburguesa para móviles */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links del menú */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">
                  Coches
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/new">
                  Añadir Coche
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
