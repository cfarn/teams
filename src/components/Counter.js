import React from 'react'

class Counter extends React.Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <button type="button" className="btn btn-outline-dark" onClick={this.props.substract}>-</button>
                <h2>{this.props.count}</h2>
                <button type="button" className="btn btn-outline-dark" onClick={this.props.increment}>+</button>
            </div>
        )
    }
}
export default Counter