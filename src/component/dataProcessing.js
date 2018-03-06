import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import Genome from './genome';
import Transriptome from './transcriptome';
import Epigenome from './epigenome';
import Coordinate from './coordinates';

import geneImg from '../img/gene.jpg';
import transImg from '../img/trans.jpg';
import hepImg from '../img/hep.jpg';
import assemImg from '../img/assem.jpg';

var dataProcessing = [
    {"value": "Reference Mapping: Genome","label": "Reference Mapping: Genome","img":geneImg},
    {"value": "Reference Mapping: Transcriptome","label": "Reference Mapping: Transcriptome","img":transImg},
    {"value": "Reference Mapping: Epigenome","label": "Reference Mapping: Epigenome","img":hepImg},
    {"value": "Reference Assembly Coordinates","label": "Reference Assembly Coordinates","img":assemImg}
  ]


  class DataProcessing extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          dataProcess:''
        }
        this.selectedData = this.selectedData.bind(this);
    }

    selectedData = (e, { value }) => this.setState({ dataProcess:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
            <main role="main">
            <div class="card">
            <header class="card-header" style={ this.state.dataProcess === '' ? { backgroundColor:''} : {backgroundColor : 'blue'} }>
                <p class="card-header-title" style={ this.state.dataProcess === '' ? { color:'', color:''} : {color : '#ffffff'} }>
                Data Pre-processing
                </p>
            </header>
            <div class="card-content">
            <div className="row col-xs-12" style={{display: 'inline-flex'}} >
            {
          dataProcessing.map((obj, index) => {
            return ( 
            <div className="col-md-3" style={{maxWidth: '250px'}} >
              <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
              <Radio
              label = {obj.label}
              name= {obj.value}
              value={obj.value}
              checked={this.state.dataProcess === obj.value}
              onChange={this.selectedData}
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
        {this.state.dataProcess === 'Reference Mapping: Genome'? <Genome/> :''}
        {this.state.dataProcess === 'Reference Mapping: Transcriptome'? <Transriptome/> :''}
        {this.state.dataProcess === 'Reference Mapping: Epigenome'? <Epigenome/> :''}
        {this.state.dataProcess === 'Reference Assembly Coordinates'? <Coordinate/> :''}
        </div>

        );
      }
    }
    
    export default DataProcessing;