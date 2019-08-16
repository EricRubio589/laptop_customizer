import React from 'react';
import './App.css';

class Parts extends React.Component {
    render() {
    // const features = Object.keys(this.props.features).map((feature, idx) => {
        // const featureHash = feature + '-' + idx;
        // const options = this.props.features[feature].map(item => {
        // const itemHash = slugify(JSON.stringify(item));

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

export default Parts;
