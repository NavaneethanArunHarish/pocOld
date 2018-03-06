import React, { Component } from 'react';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

import placeholderImg from '../img/placeholder.png';

var functionalGroupings = [
    {"value": "Placeholder","label": "Placeholder","img":placeholderImg}
  ]


  class FunctionalGroupComponent extends Component {
    
      constructor(props) {
        super(props)
        this.state = { 
          activeIndex: 0,
          functionalGroupingData:''
        }
        this.selectedFunctionalGrouping = this.selectedFunctionalGrouping.bind(this);
    }

    selectedFunctionalGrouping = (e, { value }) => this.setState({ functionalGroupingData:value })
    
        
      render() {
        const { activeIndex } = this.state
        return (
            <div>
          <main role="main">
          <div class="card">
          <header class="card-header" style={ this.state.functionalGroupingData === '' ? { backgroundColor:''} : {backgroundColor : '#c3baba'} }>
              <p class="card-header-title" style={ this.state.functionalGroupingData === '' ? { color:'', color:''} : {color : '#ffffff'} }>
              Functional Groupings
              </p>
          </header>
          <div class="card-content">
          <div className="row col-xs-12" style={{display: 'inline-flex'}} >
          {
        functionalGroupings.map((obj, index) => {
          return ( 
          <div className="col-md-3" style={{maxWidth: '162px'}} >
            <img class="btn-logo" src={obj.img} alt="" style={{height:'50px',width:'80px'}}/>
            <Radio
            label = {obj.label}
            name= {obj.value}
            value={obj.value}
            checked={this.state.functionalGroupingData === obj.value}
            onChange={this.selectedFunctionalGrouping}
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
    
    export default FunctionalGroupComponent;