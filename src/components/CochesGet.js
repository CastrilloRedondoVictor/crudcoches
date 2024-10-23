import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class CochesGet extends Component {

  state = {
    coche: null
  }

  getCoche = () => {
    let request = 'api/Coches/FindCoche/' + this.props.id
  
    axios.get(Global.apiCoches + request).then(response => {
      this.setState({
        coche: response.data
      })
    })
  }

  componentDidMount = () => {
    this.getCoche();
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Detalles del Coche {this.props.id}</h1>

        {
          this.state.coche ? (
            <div className="card shadow-sm">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src={this.state.coche.imagen} 
                    className="img-fluid rounded-start" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                    alt={`Coche ${this.state.coche.marca} ${this.state.coche.modelo}`} 
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{this.state.coche.marca} {this.state.coche.modelo}</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><strong>ID:</strong> {this.state.coche.idCoche}</li>
                      <li className="list-group-item"><strong>Marca:</strong> {this.state.coche.marca}</li>
                      <li className="list-group-item"><strong>Modelo:</strong> {this.state.coche.modelo}</li>
                      <li className="list-group-item"><strong>Conductor:</strong> {this.state.coche.conductor}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center mt-5">
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
