import React, { Component } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from '../Global';

export default class CochesEdit extends Component {
  inpId = React.createRef();
  inpMarca = React.createRef();
  inpModelo = React.createRef();
  inpConductor = React.createRef();
  inpImagen = React.createRef();
  

  state = {
    coche: null,
    editado: false
  }

  editCoche = (e) => {
    e.preventDefault();

    let idCoche = this.inpId.current.value;
    let marca = this.inpMarca.current.value;
    let modelo = this.inpModelo.current.value;
    let conductor = this.inpConductor.current.value;
    let imagen = this.inpImagen.current.value;

    let data = {
      idCoche: parseInt(idCoche),
      marca: marca,
      modelo: modelo,
      conductor: conductor,
      imagen: imagen,
    }

    let request = 'api/Coches/UpdateCoche'

    axios.put(Global.apiCoches + request, data).then(response => {
      this.setState({
        editado: true
      })
    })
  }

  cargarInfo = () => {
    let request = 'api/Coches/FindCoche/' + this.props.id

    axios.get(Global.apiCoches + request).then(response => {
      this.setState({
        coche: response.data
      });

      this.inpId.current.value = this.props.id
      this.inpMarca.current.value = response.data.marca
      this.inpModelo.current.value = response.data.modelo
      this.inpConductor.current.value = response.data.conductor
      this.inpImagen.current.value = response.data.imagen
    })
  }

  componentDidMount = () => {
    this.cargarInfo();
    this.setState({
      editado: false
    })
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Editar Coche</h1>

        {this.state.coche ? (
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h5 className="card-title">Detalles del Coche</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Id: {this.state.coche.idCoche}</li>
              <li className="list-group-item">Marca: {this.state.coche.marca}</li>
              <li className="list-group-item">Modelo: {this.state.coche.modelo}</li>
              <li className="list-group-item">Conductor: {this.state.coche.conductor}</li>
              <li className="list-group-item">
                <img
                  style={{ width: '250px', height: '150px' }}
                  src={this.state.coche.imagen}
                  alt={this.state.coche.modelo}
                />
              </li>
            </ul>
          </div>
        ) : (
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        )}

        <form onSubmit={this.editCoche} className="card p-4 shadow-sm">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">ID</label>
              <input disabled type="number" className="form-control" ref={this.inpId} />
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
            <button type="submit" className="btn btn-primary w-50">Editar Coche</button>
          </div>
        </form>

        {this.state.editado && (<Navigate to='/' />)}
      </div>
    );
  }
}
