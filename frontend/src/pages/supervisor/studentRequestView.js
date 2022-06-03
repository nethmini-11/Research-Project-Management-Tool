import React, { Component } from 'react';
import Container  from "react-bootstrap/Container";
import axios from 'axios';

export default class StudentRequestView extends Component {

    constructor(props){
        super(props);
        this.state={
            specialization:"",
            topic:"",
            studentName1:"",
            studentName2:"",
            studentName3:"",
            studentName4:"",
            requestStatus:""
        }
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;

        const {specialization,topic,studentName1,studentName2,studentName3,studentName4,requestStatus} = this.state;
        const data = {
            specialization:specialization,
            topic:topic,
            studentName1:studentName1,
            studentName2:studentName2,
            studentName3:studentName3,
            studentName4:studentName4,
            requestStatus:requestStatus
        }
        console.log(data);

        axios.put('http://localhost:8050/panel/update/'+id ,data).then((res) => {
            if(res.data.success){
                alert("Panel Updated Successfully!")
                this.setState(
                    {
                        specialization:"",
                        topic:"",
                        studentName1:"",
                        studentName2:"",
                        studentName3:"",
                        studentName4:"",
                        requestStatus:""
                    }
                )
            }
        })
    }

    // componentDidMount(){
    //     const id = this.props.match.params.id;

    //     axios.get('http://localhost:8050/req_supervisor/'+id).then((res) => {
    //         if(res.data.success){
    //             this.setState({
    //                 specialization:res.data.RequestSupervisor.specialization,
    //                 topic:res.data.RequestSupervisor.topic,
    //                 studentName1:res.data.RequestSupervisor.studentName1,
    //                 studentName2:res.data.RequestSupervisor.studentName2,
    //                 studentName3:res.data.RequestSupervisor.studentName3,
    //                 studentName4:res.data.RequestSupervisor.studentName4,
    //                 requestStatus:res.data.RequestSupervisor.requestStatus
    //             });
    //             console.log(this.state.RequestSupervisor);
    //         }
    //     });
    // }


    render() {
        return (
            <Container>
                <br></br><br></br><h4>Consider Request</h4><br></br><hr></hr><br></br>
            <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Panel ID</label>
                        <input type="text" className="form-control" name="specialization" placeholder="Enter Panel ID"
                            value={this.state.specialization}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">topic</label>
                        <input type="text" className="form-control" name="topic" placeholder="Member 01 Name"
                            value={this.state.topic}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">studentName1</label>
                        <input type="text" className="form-control" name="studentName1" placeholder="Member 02 Name"
                            value={this.state.studentName1}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">studentName2</label>
                        <input type="text" className="form-control" name="studentName2" placeholder="Member 03 Name"
                            value={this.state.studentName2}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">studentName3</label>
                        <input type="text" className="form-control" name="studentName3" placeholder="Panel Type"
                            value={this.state.studentName3}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">studentName4</label>
                        <input type="text" className="form-control" name="studentName4" placeholder="Panel Type"
                            value={this.state.studentName4}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">requestStatus</label>
                        <input type="text" className="form-control" name="requestStatus" placeholder="Panel Type"
                            value={this.state.requestStatus}
                            onChange={this.handleInputChange} />
                    </div>
                    <br/><br/>
                    <hr/>
                    <br></br><br></br>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>UPDATE PANEL</button>
                    </div>
            </form>
            <br/><br/><br/><br/>
            </Container>
            
        )
    }
}