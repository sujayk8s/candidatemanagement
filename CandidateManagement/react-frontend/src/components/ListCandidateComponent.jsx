import React, { Component } from 'react'
import CandidateService from '../services/CandidateService'

class ListCandidateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                candidates: []
        }
        this.addCandidate = this.addCandidate.bind(this);
        this.editCandidate = this.editCandidate.bind(this);
        this.deleteCandidate = this.deleteCandidate.bind(this);
    }

    deleteCandidate(id){
        CandidateService.deleteCandidate(id).then( res => {
            this.setState({candidates: this.state.candidates.filter(candidate => candidate.id !== id)});
        });
    }
    viewCandidate(id){
        this.props.history.push(`/view-candidate/${id}`);
    }
    editCandidate(id){
        this.props.history.push(`/add-candidate/${id}`);
    }

    componentDidMount(){
        CandidateService.getCandidates().then((res) => {
            this.setState({ candidates: res.data});
        });
    }

    addCandidate(){
        this.props.history.push('/add-candidate/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Candidates List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCandidate}> Add Candidate</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Candidate First Name</th>
                                    <th> Candidate Last Name</th>
                                    <th> Candidate Email Id</th>
                                    <th> Candidate Phone Number</th>
                                    <th> Candidate Notes</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.candidates.map(
                                        candidate =>
                                        <tr key = {candidate.id}>
                                             <td> { candidate.firstName} </td>
                                             <td> {candidate.lastName}</td>
                                             <td> {candidate.emailId}</td>
                                            <td> {candidate.phoneNumber}</td>
                                            <td> {candidate.notes}</td>
                                             <td>
                                                 <button onClick={ () => this.editCandidate(candidate.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCandidate(candidate.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCandidate(candidate.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCandidateComponent