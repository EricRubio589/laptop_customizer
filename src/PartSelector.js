import React from 'react';
import './App.css';
// import slugify from 'slugify';
// import Parts from './Parts';




class PartSelector extends React.Component {
  // render() {
  //   const features = Object.keys(this.props.features).map((feature, idx) => {
  //   const featureHash = feature + '-' + idx;
  //   const options = this.props.features[feature].map(item => {
  //     const itemHash = slugify(JSON.stringify(item));
  //       return (
  //         <div key={itemHash} className="feature__item">
  //           <input
  //             type="radio"
  //             id={itemHash}
  //             className="feature__option"
  //             name={slugify(feature)}
  //             checked={item.name === this.state.selected[feature].name}
  //             onChange={e => this.updateFeature(feature, item)}
  //           />
  //           <label htmlFor={itemHash} className="feature__label">
  //             {item.name} ({USCurrencyFormat.format(item.cost)})
  //           </label>
  //           <Parts 
  //           features={features}
  //           featureHash={featureHash}
  //           options={options}
  //           feature={feature}
  //           />
  //         </div>
  //       );
  //   })        
  //   });
  // }  
  render() {
    return (
      <fieldset className="feature" key={this.props.featureHash}>
      <legend className="feature__name">
          <h3>{this.props.feature}</h3>
      </legend>
      {this.props.options}
      </fieldset>
    );
  } 
}

export default PartSelector;