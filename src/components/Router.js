import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './Menu'
import CochesView from './CochesView'
import CochesInsert from './CochesInsert'
import CochesEdit from './CochesEdit'
import CochesGet from './CochesGet'
import CochesDelete from './CochesDelete'
export default class Router extends Component {
  render() {

    function GetIdDCochePut () {
        let {id} = useParams()
        return <CochesEdit id={id} />
    }

    function GetIdDCocheGet () {
      let {id} = useParams()
      return <CochesGet id={id} />
    }

    function GetIdCocheDelete () {
      let {id} = useParams()
      return <CochesDelete id={id} />
    }

    return (
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path='/' element={ <CochesView /> } />
            <Route path='/new' element={ <CochesInsert /> } />
            <Route path='/edit/:id' element={ <GetIdDCochePut /> } />
            <Route path='/get/:id' element={ <GetIdDCocheGet /> } />
            <Route path='/delete/:id' element={ <GetIdCocheDelete /> } />
        </Routes>
      </BrowserRouter>
    )
  }
}
