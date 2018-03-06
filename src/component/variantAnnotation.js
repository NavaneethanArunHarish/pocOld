import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import annovarImg from '../img/img13.png';
import enseblImg from '../img/img14.gif';
import ncbiNewImg from '../img/img15.jpg';
import geneNewImg from '../img/img16.jpg';

var variantAnnotation = [
    {"value": "ANNOVAR","label": "ANNOVAR","img":annovarImg},
    {"value": "Ensembl","label": "Ensembl","img":enseblImg},
    {"value": "NCBI","label": "NCBI","img":ncbiNewImg},
    {"value": "Gene","label": "Gene","img":geneNewImg}
  ]


  class VariantAnnotationComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          variantAnnotataionData:''
        }
        this.selectedVariantAnnotation = this.selectedVariantAnnotation.bind(this);
    }

    selectedVariantAnnotation = (e, { value }) => this.setState({ variantAnnotataionData:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
          <main role="main">
          <div class="card">
          <header class="card-header" style={ this.state.variantAnnotataionData === '' ? { backgroundColor:''} : {backgroundColor : '#b95fe6'} }>
              <p class="card-header-title" style={ this.state.variantAnnotataionData === '' ? { color:'', color:''} : {color : '#ffffff'} }>
              Variant Annotation
              </p>
          </header>
          <div class="card-content">
          <div className="row col-xs-12" style={{display: 'inline-flex'}} >
          {
        variantAnnotation.map((obj, index) => {
          return ( 
          <div className="col-md-3" style={{maxWidth: '120px'}} >
            <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
            <Checkbox 
            label = {obj.label}
            name= {obj.value}
            value={obj.value}
            onChange={this.selectedVariantAnnotation} />
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
    
    export default VariantAnnotationComponent;