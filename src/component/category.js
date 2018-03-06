import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import DataProcessing from './dataProcessing';
import VariantDiscovery from './variantDiscovery';
import VariantRefinement from './variantRefinement';

import data from '../img/data-preprocessing.png';
import discoveryImg from '../img/reserve.jpg';
import refineImg from '../img/RefinementLogo.jpg';

var categoryList = [
    {"value": "DataPre-processing","label": "DataPre-processing","img": data},
    {"value": "Variant Discovery","label": "Variant Discovery","img": discoveryImg},
    {"value": "Variant Refinement","label": "Variant Refinement","img":refineImg}
  ]


  class CategoryComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          category:''
        }
        this.selectedCategory = this.selectedCategory.bind(this);
    }

    selectedCategory = (e, { value }) => this.setState({ category:value})
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
            <main role="main">
            <div class="card">
            <header class="card-header" style={ this.state.category === '' ? { backgroundColor:'', color:''} : {backgroundColor : 'red'} }>
                <p class="card-header-title" style={ this.state.category === '' ? { color:'', color:''} : {color : '#ffffff'} }>
                  Category
                </p>
            </header>
            <div class="card-content">
            <div className="row col-xs-12" style={{display: 'inline-flex'}} >
            {
          categoryList.map((obj, index) => {
            return ( 
            <div className="col-md-3" style={{maxWidth: '177px'}} >
              <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
              <Radio
                label = {obj.label}
                name= {obj.value}
                value={obj.value}
                checked={this.state.category === obj.value}
                onChange={this.selectedCategory}
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
      {this.state.category === 'DataPre-processing'? <DataProcessing/> :''}
      {this.state.category === 'Variant Discovery'? <VariantDiscovery/> :''}
      {this.state.category === 'Variant Refinement'? <VariantRefinement/> :''}

    </div>
        );
      }
    }
    
    export default CategoryComponent;