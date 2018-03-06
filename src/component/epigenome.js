import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import hepImg from '../img/hep.jpg';

var epigenome = [
    {"value": "Bismark","label": "Bismark","img":hepImg}
  ]


  class EpigenomeComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          epigenomeData:''
        }
        this.selectedEpigenome = this.selectedEpigenome.bind(this);
    }

    selectedEpigenome = (e, { value }) => this.setState({ epigenomeData:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
          <main role="main">
          <div class="card">
          <header class="card-header" style={ this.state.epigenomeData === '' ? { backgroundColor:''} : {backgroundColor : '#fb00ff'} }>
              <p class="card-header-title" style={ this.state.epigenomeData === '' ? { color:'', color:''} : {color : '#ffffff'} }>
              Reference Mapping: Epigenome
              </p>
          </header>
          <div class="card-content">
          <div className="row col-xs-12" style={{display: 'inline-flex'}} >
          {
        epigenome.map((obj, index) => {
          return ( 
          <div className="col-md-3" style={{maxWidth: '82px'}} >
            <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
            <Radio
            label = {obj.label}
            name= {obj.value}
            value={obj.value}
            checked={this.state.epigenomeData === obj.value}
            onChange={this.selectedEpigenome}
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
    
    export default EpigenomeComponent;