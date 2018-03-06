import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import bowtieImg from '../img/img5.png';
import hisatImg from '../img/img6.png';

var transcriptome = [
    {"value": "Bowtie2","label": "Bowtie2","img":bowtieImg},
    {"value": "HISAT2","label": "HISAT2","img":hisatImg}
  ]


  class TranscriptomeComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          transcriptomeData:''
        }
        this.selectedTranscriptome = this.selectedTranscriptome.bind(this);
    }

    selectedTranscriptome = (e, { value }) => this.setState({ transcriptomeData:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
          <main role="main">
          <div class="card">
          <header class="card-header" style={ this.state.transcriptomeData === '' ? { backgroundColor:''} : {backgroundColor : '#f1d448'} }>
              <p class="card-header-title" style={ this.state.transcriptomeData === '' ? { color:'', color:''} : {color : '#ffffff'} }>
              Reference Mapping: Transcriptome
              </p>
          </header>
          <div class="card-content">
          <div className="row col-xs-12" style={{display: 'inline-flex'}} >
          {
        transcriptome.map((obj, index) => {
          return ( 
          <div className="col-md-3" style={{maxWidth: '100px'}} >
            <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
            <Radio
            label = {obj.label}
            name= {obj.value}
            value={obj.value}
            checked={this.state.transcriptomeData === obj.value}
            onChange={this.selectedTranscriptome}
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
    
    export default TranscriptomeComponent;