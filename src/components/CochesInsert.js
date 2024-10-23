import axios from 'axios';
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Global from '../Global';

export default class CochesInsert extends Component {

  inpId = React.createRef();
  inpMarca = React.createRef();
  inpModelo = React.createRef();
  inpConductor = React.createRef();
  inpImagen = React.createRef();

  state = {
    creado: false
  }

  insertCoches = (e) => {
    e.preventDefault();

    let idCoche = this.inpId.current.value
    let marca = this.inpMarca.current.value
    let modelo = this.inpModelo.current.value
    let conductor = this.inpConductor.current.value
    let imagen = this.inpImagen.current.value

    let data = {
      idCoche: parseInt(idCoche),
      marca: marca,
      modelo: modelo,
      conductor: conductor,
      imagen: imagen,
    }

    let request = 'api/Coches/InsertCoche'

    axios.post(Global.apiCoches + request, data).then(response => {
      this.setState({
        creado: true
      })
    })
  }

  componentDidMount = () => {
    this.setState({
      creado: false
    })
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Añadir Coche</h1>

        <form onSubmit={this.insertCoches} className="card p-4 shadow-sm">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">ID</label>
              <input type="number" className="form-control" ref={this.inpId} required />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Marca</label>
              <input type="text" className="form-control" ref={this.inpMarca} required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Modelo</label>
              <input type="text" className="form-control" ref={this.inpModelo} required />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Conductor</label>
              <input type="text" className="form-control" ref={this.inpConductor} required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Imagen (URL)</label>
            <input type="text" className="form-control" ref={this.inpImagen} required />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50">Añadir Coche</button>
          </div>
        </form>

        {
          this.state.creado &&
          (<Navigate to='/' />)
        }
      </div>
    )
  }
}
