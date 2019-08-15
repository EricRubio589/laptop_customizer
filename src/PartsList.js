import React from 'react';
import './App.css';
import PartSelector from './PartSelector';

class PartsList extends React.Component {
    render() {
        const {selected} = this.props;
        const parts = Object.keys(this.props.features)
        .map(key => {
            return (
                <PartSelector 
                    name={key} 
                    key={key} 
                    options={this.props.features[key]} 
                    selected={selected}
                    onSelect={this.props.onSelect}
                />
            )
        })

        return (
        <section className="main__form">
            <h3>Customize your laptop</h3>
            {parts}
        </section>
        )
    }
}

export default PartsList;