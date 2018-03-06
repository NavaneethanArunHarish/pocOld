import React, { Component } from 'react';
import Category from './component/category';
//import './App.css';
import { Accordion, Icon, Form, Radio, Checkbox } from 'semantic-ui-react';

// var categoryList = [
//   {"value": "DataPre-processing","label": "DataPre-processing","img": data},
//   {"value": "Variant Discovery","label": "Variant Discovery","img": discoveryImg},
//   {"value": "Variant Refinement","label": "Variant Refinement","img":refineImg}
// ]

// var dataProcessing = [
//   {"value": "Reference Mapping: Genome","label": "Reference Mapping: Genome","img":geneImg},
//   {"value": "Reference Mapping: Transcriptome","label": "Reference Mapping: Transcriptome","img":transImg},
//   {"value": "Reference Mapping: Epigenome","label": "Reference Mapping: Epigenome","img":hepImg},
//   {"value": "Reference Assembly Coordinates","label": "Reference Assembly Coordinates","img":assemImg}
// ]

// var variantDiscovery = [
//   {"value": "Variant Calling","label": "Variant Calling","img":variantCallingImg},
//   {"value": "Variant Annotation","label": "Variant Annotation","img":variantAnnotationImg},
//   {"value": "Variant Filtering","label": "Variant Filtering","img":variantFilterImg}
// ]

// var variantRefinement = [
//   {"value": "Functional Groupings","label": "Functional Groupings","img":functionGroupImg},
//   {"value": "Haplotypes","label": "Haplotypes","img":haplotypesImg}
// ]

// var genome = [
//   {"value": "Burrows Wheeler","label": "Burrows Wheeler","img":burrowImg},
//   {"value": "Aligner (BWA)","label": "Aligner (BWA)","img":alignerImg}
// ]

// var transcriptome = [
//   {"value": "Bowtie2","label": "Bowtie2","img":bowtieImg},
//   {"value": "HISAT2","label": "HISAT2","img":hisatImg}
// ]

// var epigenome = [
//   {"value": "Bismark","label": "Bismark","img":hepImg}
// ]

// var coordinates = [
//   {"value": "NCBI Remap","label": "NCBI Remap","img":ncbiImg},
//   {"value": "UCSC Liftover","label": "UCSC Liftover","img":ucscImg},
//   {"value": "Ensembl Assembly","label": "Ensembl Assembly","img":assembleImg},
//   {"value": "Converter","label": "Converter","img":converterImg}
// ]

// var variantCalling = [
//   {"value": "FreeBayes","label": "FreeBayes","img":freeBayImg},
//   {"value": "GATK 4","label": "GATK 4","img":gatkImg}
// ]

// var variantAnnotation = [
//   {"value": "ANNOVAR","label": "ANNOVAR","img":annovarImg},
//   {"value": "Ensembl","label": "Ensembl","img":enseblImg},
//   {"value": "NCBI","label": "NCBI","img":ncbiNewImg},
//   {"value": "Gene","label": "Gene","img":geneNewImg}
// ]

// var variantFiltering = [
//   {"value": "Placeholder","label": "Placeholder","img":placeholderImg}
// ]

// var variantFiltering = [
//   {"value": "Placeholder","label": "Placeholder","img":placeholderImg}
// ]

// var functionalGroupings = [
//   {"value": "Placeholder","label": "Placeholder","img":placeholderImg}
// ]

// var haplotypes = [
//   {"value": "Placeholder","label": "Placeholder","img":placeholderImg}
// ]


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      activeIndex: 0,
      // dataProcess:'',
      // category:'',
      // discovery:'',
      // refinement:'',
      // genomeData:'',
      // transcriptomeData:'',
      // epigenomeData:'',
      // coordinatesData:'',
      // variantAnnotataionData:'',
      // variantCallingData:'',
      // variantFilteringData:''
    }

}

    
  render() {
    const { activeIndex } = this.state
    return (
      <div className="container">
        <h1>React Application</h1>
        <Category/>
      </div>
    );
  }
}

export default App;
