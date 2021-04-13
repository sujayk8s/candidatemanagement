import React, { Component } from 'react'
import CandidateService from '../services/CandidateService'

class ViewCandidateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            candidate: {}
        }
    }

    componentDidMount(){
        CandidateService.getCandidateById(this.state.id).then( res => {
            this.setState({candidate: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Candidate Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Candidate First Name: </label>
                            <div> { this.state.candidate.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Candidate Last Name: </label>
                            <div> { this.state.candidate.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Candidate Email ID: </label>
                            <div> { this.state.candidate.emailId }</div>
                        </div>
                        <div className = "row">
                           <label> Candidate Phone Number: </label>
                           <div> { this.state.candidate.phoneNumber }</div>
                        </div>
                        <div className = "row">
                        <label> Notes: </label>
                        <div> { this.state.candidate.notes }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCandidateComponent