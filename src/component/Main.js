import React from 'react';
import HornedBeast from './HornedBeast';
import DataJson from './data.json';
// import { CardGroup } from 'react-bootstrap'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log('this.props.filtered', this.props.filtered);
        return (
            <>
                {
                    !this.props.filtered ? DataJson.map((element, index) => (
                        <HornedBeast
                            title={element.title}
                            image_url={element.image_url}
                            description={element.description}
                            name={element.keyword}
                            key={index}
                            horns={element.horns}
                            showCard={this.props.showCard}
                        />

                    )) : this.props.filtered.map((element, index) => (

                        < HornedBeast
                            title={element.title}
                            image_url={element.image_url}
                            description={element.description}
                            name={element.keyword}
                            key={index}
                            horns={element.horns}
                            showCard={this.props.showCard}
                        />
                    ))
                }
            </>
        );
    }
}

export default Main;