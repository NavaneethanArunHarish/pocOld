import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import placeholderImg from '../img/placeholder.png';

var variantFiltering = [
    {"value": "Placeholder","label": "Placeholder","img":placeholderImg}
  ]


  class VariantFilterComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          variantFilteringData:''
        }
        this.selectedVariantFiltering = this.selectedVariantFiltering.bind(this);
    }

    selectedVariantFiltering = (e, { value }) => this.setState({ variantFilteringData:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
          <main role="main">
          <div class="card">
          <header class="card-header" style={ this.state.variantFilteringData === '' ? { backgroundColor:''} : {backgroundColor : '#f4a136'} }>
              <p class="card-header-title" style={ this.state.variantFilteringData === '' ? { color:'', color:''} : {color : '#ffffff'} }>
              Variant Filtering
              </p>
          </header>
          <div class="card-content">
          <div className="row col-xs-12" style={{display: 'inline-flex'}} >
          {
        variantFiltering.map((obj, index) => {
          return ( 
          <div className="col-md-3" style={{maxWidth: '162px'}} >
            <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
            <Radio
            label = {obj.label}
            name= {obj.value}
            value={obj.value}
            checked={this.state.variantFilteringData === obj.value}
            onChange={this.selectedVariantFiltering}
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
    
    export default VariantFilterComponent;