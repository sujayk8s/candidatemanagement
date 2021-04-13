import React, { Component } from 'react'
import CandidateService from '../services/CandidateService';

class UpdateCandidateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            phoneNumber: '',
            notes: '',
            addInfo: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateCandidate = this.updateCandidate.bind(this);
    }

    componentDidMount(){
        CandidateService.getCandidateById(this.state.id).then( (res) =>{
            let candidate = res.data;
            this.setState({firstName: candidate.firstName,
                lastName: candidate.lastName,
                emailId : candidate.emailId,
                phoneNumber : candidate.phoneNumber,
                notes : candidate.Notes,
                addInfo : candidate.addInfo
            });
        });
    }

    updateCandidate = (e) => {
        e.preventDefault();
        let candidate = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, phoneNumber: this.state.phoneNumber, notes: this.state.notes, addInfo: this.state.addInfo};
        console.log('candidate => ' + JSON.stringify(candidate));
        console.log('id => ' + JSON.stringify(this.state.id));
        CandidateService.updateCandidate(candidate, this.state.id).then( res => {
            this.props.history.push('/candidates');
        });
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changePhoneNumberHandler= (event) => {
            this.setState({phoneNumber: event.target.value});
    }

    changeNotesHandler= (event) => {
            this.setState({notes: event.target.value});
    }

    //changePhoneNumberHandlerHandler

    cancel(){
        this.props.history.push('/candidates');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Candidate</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control"
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control"
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                         <div className = "form-group">
                                              <label> Phone Number: </label>
                                              <input placeholder="Phone Number" name="phoneNumber" className="form-control"
                                               value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                         </div>

                                          <div className = "form-group">
                                              <label> Notes: </label>
                                              <input placeholder="Notes" name="notes" className="form-control"
                                               value={this.state.notes} onChange={this.changeNotesHandler}/>
                                          </div>

                                        <button className="btn btn-success" onClick={this.updateCandidate}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateCandidateComponent