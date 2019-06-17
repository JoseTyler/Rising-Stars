import React, { Component } from 'react';
import axios from 'axios'

class Counter extends Component {
    state = {
        count: {
            value: 0
        }
    }

    componentDidMount = () => {
        this.counter()

    }

    counter = () => {
        axios.get('api/v1/count/').then((res) => {
            this.setState({ count: res.data })
        })

    }


    render() {
        return (
            <div>
                This site has been visited

                <p>
                    {this.state.count.value} times.
                </p>

            </div>
        );
    }
}

export default Counter;