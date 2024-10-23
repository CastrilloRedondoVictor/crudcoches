import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'

export default class CochesView extends Component {

  state = {
    coches: []
  }

  getCoches = () => {
    let request = 'api/Coches'

    axios.get(Global.apiCoches + request).then(response => {
      this.setState({
        coches: response.data
      })
    })
  }

  componentDidMount = () => {
    this.getCoches()
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Lista de Coches</h1>

        {
          this.state.coches.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover table-bordered align-middle text-center">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">ID Coche</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Conductor</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.coches.map((coche, index) => (
                      <tr key={index}>
                        <th scope="row">{coche.idCoche}</th>
                        <td>{coche.marca}</td>
                        <td>{coche.modelo}</td>
                        <td>{coche.conductor}</td>
                        <td>
                          <img 
                            className="img-fluid rounded shadow" 
                            style={{ maxWidth: '200px', height: 'auto' }} 
                            src={coche.imagen} 
                            alt={coche.marca + ' ' + coche.modelo} 
                          />
                        </td>
                        <td>
                          <div className="d-grid gap-2 d-md-block">
                            <NavLink to={`/edit/${coche.idCoche}`} className="btn btn-warning btn-sm m-1">Editar</NavLink>
                            <NavLink to={`/delete/${coche.idCoche}`} className="btn btn-danger btn-sm m-1">Borrar</NavLink>
                            <NavLink to={`/get/${coche.idCoche}`} className="btn btn-info btn-sm m-1">Detalles</NavLink>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
