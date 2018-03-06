import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import ncbiImg from '../img/img7.png';
import ucscImg from '../img/img8.png';
import assembleImg from '../img/img9.png';
import converterImg from '../img/img10.png';

var coordinates = [
    {"value": "NCBI Remap","label": "NCBI Remap","img":ncbiImg},
    {"value": "UCSC Liftover","label": "UCSC Liftover","img":ucscImg},
    {"value": "Ensembl Assembly","label": "Ensembl Assembly","img":assembleImg},
    {"value": "Converter","label": "Converter","img":converterImg}
  ]


  class CoordinateComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          coordinatesData:''
        }
        this.selectedCoordinates = this.selectedCoordinates.bind(this);
    }

    selectedCoordinates = (e, { value }) => this.setState({ coordinatesData:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
          <main role="main">
          <div class="card">
          <header class="card-header" style={ this.state.coordinatesData === '' ? { backgroundColor:''} : {backgroundColor : '#cae65f'} }>
              <p class="card-header-title" style={ this.state.coordinatesData === '' ? { color:'', color:''} : {color : '#ffffff'} }>
              Reference Assembly Coordinates
              </p>
          </header>
          <div class="card-content">
          <div className="row col-xs-12" style={{display: 'inline-flex'}} >
          {
        coordinates.map((obj, index) => {
          return ( 
          <div className="col-md-3" style={{maxWidth: '162px'}} >
            <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
            <Radio
            label = {obj.label}
            name= {obj.value}
            value={obj.value}
            checked={this.state.coordinatesData === obj.value}
            onChange={this.selectedCoordinates}
          />
          </div>
          )
        })
      }
          </div>
          </div>
          <footer class="card-footer">
          </footer>
        </div><br/>
      </main>
        </div>

        );
      }
    }
    
    export default CoordinateComponent;