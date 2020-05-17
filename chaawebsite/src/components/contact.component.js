import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeSubject = this.changeSubject.bind(this);
        this.changeMessage = this.changeMessage.bind(this);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }
   

    onSubmit(e){
        e.preventDefault();
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    changeName(e){
        this.setState({
            name: e.target.value
        });
    }

    changeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    changeSubject(e){
        this.setState({
            subject: e.target.value
        });
    }

    changeMessage(e){
        this.setState({
            message: e.target.value
        });
    }

    render(){
        return( 
            <div>
                <hr></hr>
                <div className = "headingsText">CONTACT US</div>
                <hr></hr>
                <div className = 'contactForm'>
                    <br></br>
                    <div id = "contactText">FILL OUT THIS FORM FOR GENERAL INQUIRIES</div>
                    <br></br>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group" required>
                            <label for="exampleInputEmail1">Name *</label>
                            <input type="text" class="form-control" id="text" aria-describedby="emailHelp" value={this.state.name} onChange={this.changeName}/>
                        </div>
                        <div class="form-group" required>
                            <label for="exampleInputEmail1">Email Address *</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"value={this.state.email} onChange={this.changeEmail}/>
                        </div>
                        <div class="form-group" required>
                            <label for="exampleInputEmail1">Subject *</label>
                            <input type="subject" class="form-control" id="subject" aria-describedby="emailHelp" value={this.state.subject} onChange={this.changeSubject}/>
                        </div>
                        <div class="form-group" required>
                            <label for="exampleFormControlTextarea1">Message *</label>
                            <textarea class="form-control" id="message" rows="3" value={this.state.message} onChange={this.changeMessage}></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark">SUBMIT</button>
                    </form>
                </div>
                <br></br>
                <br></br>
            </div>  
        )
    }
}