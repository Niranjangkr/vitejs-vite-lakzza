/*R-1)Create a react class component having state variables name and feespaid to store person’s name and the status of fees paid (true/false) respectively. Render the values of the above state variables using a textbox and checkbox.*/

import React from "react";

class Pr1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            feesPaid: false
        }
        console.log(this.state)
    }
    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleFeesPaid = (event) =>{
        this.setState({feesPaid: event.target.checked })
    }

    render(){
        return(
            <>
                <label>Enter your Name: </label>
                <input id="name" type = "text" value={this.state.name} onChange={this.handleNameChange} />

                <label>Fees paid</label>
                <input type = "checkbox" value={this.state.feesPaid} onChange = {this.handleFeesPaid} />

                <h3>Name: {this.state.name}</h3>
                <h3>{this.state.feesPaid?"Fees Paid: Paid": "Fees Paid: Not Paid"}</h3>
            </>
        )
    }
}

export default Pr1;