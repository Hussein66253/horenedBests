import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'
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
        let hornedSelected = {
            title: this.props.title,
            image_url: this.props.image_url,
            description: this.props.description,
        }
        this.props.showCard(hornedSelected);
    }
    render() {
        return (
            // <div>

            //     <h2>{this.props.title}</h2>
            //     <img onClick={this.handelClicks} src={this.props.image_url} alt={this.props.title} title={this.props.title} />
            //     <p>{this.props.description}</p>
            //     <p>Number of clicks   {this.state.clicks} 🧡</p>
            // </div>
            <Row xs={1} md={2} className="g-4">
                <Col>
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
                </Col>
            </Row>
        )
    }
}
export default HornedBeast;