import React from 'react';
import { Card } from 'react-bootstrap'
class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
    }

    handelClicks = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
    render() {
        return (
            // <div>

            //     <h2>{this.props.title}</h2>
            //     <img onClick={this.handelClicks} src={this.props.image_url} alt={this.props.title} title={this.props.title} />
            //     <p>{this.props.description}</p>
            //     <p>Number of clicks   {this.state.clicks} 🧡</p>
            // </div>
            <Card >
                <Card.Img variant="top" onClick={this.handelClicks} src={this.props.image_url} alt={this.props.title} title={this.props.title} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Footer>
                        <small className="text-muted">Number of clicks   {this.state.clicks} 🧡</small>
                    </Card.Footer>
                </Card.Body>
            </Card>
        )
    }
}
export default HornedBeast;