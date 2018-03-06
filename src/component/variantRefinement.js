import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import FunctionalGroup from './functionalGroup';
import Haplotypes from './haplotypes';

import functionGroupImg from '../img/img1.png';
import haplotypesImg from '../img/img2.gif';

var variantRefinement = [
    {"value": "Functional Groupings","label": "Functional Groupings","img":functionGroupImg},
    {"value": "Haplotypes","label": "Haplotypes","img":haplotypesImg}
  ]


  class VariantRefinement extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
           refinement:''
        }
        this.selectedVariantRefinement = this.selectedVariantRefinement.bind(this);
    }

    selectedVariantRefinement = (e, { value }) => this.setState({ refinement:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
              <main role="main">
              <div class="card">
              <header class="card-header" style={ this.state.refinement === '' ? { backgroundColor:''} : {backgroundColor : '#47f7d6'} }>
                  <p class="card-header-title" style={ this.state.refinement === '' ? { color:'', color:''} : {color : '#ffffff'} }>
                  Variant Refinement
                  </p>
              </header>
              <div class="card-content">
              <div className="row col-xs-12" style={{display: 'inline-flex'}} >
              {
            variantRefinement.map((obj, index) => {
              return ( 
              <div className="col-md-3" style={{maxWidth: '162px'}} >
                <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
                <Radio
                label = {obj.label}
                name= {obj.value}
                value={obj.value}
                checked={this.state.refinement === obj.value}
                onChange={this.selectedVariantRefinement}
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
          {this.state.refinement === 'Functional Groupings'? <FunctionalGroup/> :''}
          {this.state.refinement === 'Haplotypes'? <Haplotypes/> :''}
          </div>
        );
      }
    }
    
    export default VariantRefinement;