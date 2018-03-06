import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import placeholderImg from '../img/placeholder.png';

var haplotypes = [
    {"value": "Placeholder","label": "Placeholder","img":placeholderImg}
  ]


  class HaplotypesComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          haplotypesData:''
        }
        this.selectedHaplotypes = this.selectedHaplotypes.bind(this);
    }

    selectedHaplotypes = (e, { value }) => this.setState({ haplotypesData:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
          <main role="main">
          <div class="card">
          <header class="card-header" style={ this.state.haplotypesData === '' ? { backgroundColor:''} : {backgroundColor : '#d8a08c'} }>
              <p class="card-header-title" style={ this.state.haplotypesData === '' ? { color:'', color:''} : {color : '#ffffff'} }>
              Haplotypes
              </p>
          </header>
          <div class="card-content">
          <div className="row col-xs-12" style={{display: 'inline-flex'}} >
          {
        haplotypes.map((obj, index) => {
          return ( 
          <div className="col-md-3" style={{maxWidth: '162px'}} >
            <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
            <Radio
            label = {obj.label}
            name= {obj.value}
            value={obj.value}
            checked={this.state.haplotypesData === obj.value}
            onChange={this.selectedHaplotypes}
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
    
    export default HaplotypesComponent;