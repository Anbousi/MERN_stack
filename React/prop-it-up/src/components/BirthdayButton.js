import React, { Component } from 'react'

class BirthdayButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            Age: this.props.age
        };
    }

    addAge = () =>  this.setState({Age: this.state.Age+1}) ;
    render() {
        const {fName , lName} = this.props
        return (
            <div>
                <button onClick = {this.addAge} >Birthday Button for {fName} {lName}</button>                
            </div>
        );
    }
}

export default BirthdayButton;
