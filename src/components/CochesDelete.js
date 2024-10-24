import React, { Component } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CochesDelete extends Component {
    state = {
        redirect: false
    };
    


    deleteCoche = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, bórralo!'
        }).then((result) => {
            if (result.isConfirmed) {
                let request = 'api/Coches/DeleteCoche/' + this.props.id;

                axios.delete(Global.apiCoches + request)
                    .then(response => {
                        this.setState({
                            redirect: true
                        });
                        Swal.fire(
                            '¡Borrado!',
                            'El coche ha sido borrado.',
                            'success'
                        );
                    })
                    .catch(error => {
                        console.error("Error eliminando el coche: ", error);
                    });
            } else {
                this.setState({
                    redirect: true
                });
                Swal.fire(
                    '¡Cancelado!',
                    'El coche no ha sido borrado.',
                    'error'
                );
            }
        });
    }

    componentDidMount = () => {
        this.deleteCoche()
    }

  render() {

    if (this.state.redirect) {
        return <Navigate to="/" />
    }

    return (
      <div>
      </div>
    )
  }
}
