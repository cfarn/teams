import React from 'react'

class TeamInfo extends React.Component {
    render() {
        return (
            <div className='card col-3'>
                <img src= {this.props.crestUrl} className="card-img-top" alt="team"/> 
                <div className="card-body">
                    <h5 className="card-title">{this.props.shortName}</h5>
                    <p className="card-text">{this.props.venue}</p>
                    <p className="card-text">{this.props.address}</p>
                    <p className="card-text">{this.props.email}</p>
                    <p className="card-text">{this.props.phone}</p>
                    <p className="card-text">{this.props.founded}</p>
                </div>
            </div>   
        )
    }
}

export default TeamInfo