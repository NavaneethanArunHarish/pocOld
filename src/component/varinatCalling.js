import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import freeBayImg from '../img/img11.png';
import gatkImg from '../img/img12.jpg';

var variantCalling = [
    {"value": "FreeBayes","label": "FreeBayes","img":freeBayImg},
    {"value": "GATK 4","label": "GATK 4","img":gatkImg}
  ]


  class VariantCallingComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          variantCallingData:''
        }
        this.selectedVariantCalling = this.selectedVariantCalling.bind(this);
    }

    selectedVariantCalling = (e, { value }) => this.setState({ variantCallingData:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
          <main role="main">
          <div class="card">
          <header class="card-header" style={ this.state.variantCallingData === '' ? { backgroundColor:''} : {backgroundColor : '#5fe6c8'} }>
              <p class="card-header-title" style={ this.state.variantCallingData === '' ? { color:'', color:''} : {color : '#ffffff'} }>
              Variant Calling
              </p>
          </header>
          <div class="card-content">
          <div className="row col-xs-12" style={{display: 'inline-flex'}} >
          {
        variantCalling.map((obj, index) => {
          return ( 
          <div className="col-md-3" style={{maxWidth: '120px'}} >
            <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
            <Radio
            label = {obj.label}
            name= {obj.value}
            value={obj.value}
            checked={this.state.variantCallingData === obj.value}
            onChange={this.selectedVariantCalling}
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
    
    export default VariantCallingComponent;