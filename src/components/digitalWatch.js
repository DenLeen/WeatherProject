import React, { Component } from "react";
import moment from "moment";

class DigitalWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date1: new moment().format('dddd'),
            date2: new moment().format('Do MMMM YYYY'),
            date3: new moment().format('HH:mm:ss')
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            date1: new moment().format('dddd'),
            date2: new moment().format('Do MMMM YYYY'),
            date3: new moment().format('HH:mm:ss')
        });
    }
    render() {
        return (
            <div className="digitalWatch">
                <div>
                    {this.state.date1}
                </div>
                <div>
                    {this.state.date2}
                </div>
                <div>
                {this.state.date3}
            </div>
            </div>
        );
    }
}
export default DigitalWatch;

