import React from 'react';
import { Modal } from 'react-bootstrap'
class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal
                    show={this.props.show}
                    onHide={this.props.hideCard}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selected.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <img style={{ width: '100%' }} src={this.props.selected.image_url} alt="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <p>{this.props.selected.description}</p>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast