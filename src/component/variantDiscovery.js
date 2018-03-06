import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import VariantCalling from './varinatCalling';
import VariantAnnotation from './variantAnnotation';
import VariantFiltering from './variantFiltering';

import variantCallingImg from '../img/variant1.png';
import variantAnnotationImg from '../img/variant2.png';
import variantFilterImg from '../img/variant3.png';

var variantDiscovery = [
    {"value": "Variant Calling","label": "Variant Calling","img":variantCallingImg},
    {"value": "Variant Annotation","label": "Variant Annotation","img":variantAnnotationImg},
    {"value": "Variant Filtering","label": "Variant Filtering","img":variantFilterImg}
  ]


  class VariantDiscovery extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
           discovery:''
        }
        this.selectedVariantDiscovery = this.selectedVariantDiscovery.bind(this);
    }

    selectedVariantDiscovery = (e, { value }) => this.setState({ discovery:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
              <main role="main">
              <div class="card">
              <header class="card-header" style={ this.state.discovery === '' ? { backgroundColor:''} : {backgroundColor : 'pink'} }>
                  <p class="card-header-title" style={ this.state.discovery === '' ? { color:'', color:''} : {color : '#ffffff'} }>
                  Variant Discovery
                  </p>
              </header>
              <div class="card-content">
              <div className="row col-xs-12" style={{display: 'inline-flex'}} >
              {
            variantDiscovery.map((obj, index) => {
              return ( 
              <div className="col-md-3" style={{maxWidth: '177px'}} >
                <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
                <Radio
                label = {obj.label}
                name= {obj.value}
                value={obj.value}
                checked={this.state.discovery === obj.value}
                onChange={this.selectedVariantDiscovery}
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
          {this.state.discovery === 'Variant Calling'? <VariantCalling/> :''}
          {this.state.discovery === 'Variant Annotation'? <VariantAnnotation/> :''}
          {this.state.discovery === 'Variant Filtering'? <VariantFiltering/> :''}
        </div>

        );
      }
    }
    
    export default VariantDiscovery;