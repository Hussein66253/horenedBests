import React from 'react';

class HornedBeast extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.data.title}</h2>
                <img src={this.props.data.imgSrc} alt={this.props.data.imgAlt} title={this.props.data.title} />
                <p>{this.props.data.description}</p>
            </div>
        )
    }
}
 export default HornedBeast;