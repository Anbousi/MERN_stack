import { div } from 'prelude-ls';
import React , {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            Age: this.props.age
        };
    }

    addAge = () =>  this.setState({Age: this.state.Age+1}) ;
    render(){
        const {firstName , lastName , hairColor} = this.props;
        const {Age} = this.state;
        return(
            <div>
                <h1>{firstName} , {lastName}</h1>
                <p>Age: {Age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {this.addAge} >Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;
