import React from "react";

import { Form, Button } from "react-bootstrap";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // hornsNumber: 0
        };
    }
    HornsNum = (event) => {
        event.preventDefault();
        if (event.target.value === "0") {
            return this.props.filterData(0)
        } else {
            const form = event.target.value;
            console.log("form", form);
            let result = this.props.filterData(form)

            return result
        }
    };
    render() {
        return (
            <>

                <Form.Control as="select" className="bg-info" onChange={this.HornsNum} name="hornsNumber">
                    <option value="0">Open this select menu</option>
                    <option onChange={this.HornsNum} value="1">One</option>
                    <option onChange={this.HornsNum} value="2">Two</option>
                    <option onChange={this.HornsNum} value="3">Three</option>
                </Form.Control>
            </ >
        );
    }
}
export default Header;