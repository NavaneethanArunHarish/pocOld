import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import burrowImg from '../img/img3.gif';
import alignerImg from '../img/img4.png';

var genome = [
    {"value": "Burrows Wheeler","label": "Burrows Wheeler","img":burrowImg},
    {"value": "Aligner (BWA)","label": "Aligner (BWA)","img":alignerImg}
]


  class GenomeComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          genomeData:''
        }
        this.selectedGenome = this.selectedGenome.bind(this);
    }

    selectedGenome = (e, { value }) => this.setState({ genomeData:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
          <main role="main">
           <div class="card">
           <header class="card-header" style={ this.state.genomeData === '' ? { backgroundColor:''} : {backgroundColor : '#62f148'} }>
               <p class="card-header-title" style={ this.state.genomeData=== '' ? { color:'', color:''} : {color : '#ffffff'} }>
               Reference Mapping: Genome
               </p>
           </header>
           <div class="card-content">
           <div className="row col-xs-12" style={{display: 'inline-flex'}} >
           {
         genome.map((obj, index) => {
           return ( 
           <div className="col-md-3" style={{maxWidth: '162px'}} >
             <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
             <Radio
             label = {obj.label}
             name= {obj.value}
             value={obj.value}
             checked={this.state.genomeData === obj.value}
             onChange={this.selectedGenome}
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
    
    export default GenomeComponent;