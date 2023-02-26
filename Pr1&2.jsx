/*R-1)Create a react class component having state variables name and feespaid to store person’s name and the status of fees paid (true/false) respectively. Render the values of the above state variables using a textbox and checkbox.*/

/*R-2) Modify the above component to include another state variable called color.  In the render function of the component  check the status of the fee ,If true the message ‘ Fees paid shild be displayed using the <h2> element otherwise display the message Fees not paid in the font color determined by the ‘color’ state variable.
Objectives/features t o use: Class component,state variables, creating conditional JSX element , ternary conditional  operator.*/
import React from "react";

class PersonInfo extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            feesPaid: false,
            color: "green"
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
                {this.state.feesPaid?<h3 style = {{color: this.state.color}}>"Fees Paid : Paid"</h3>: <h3>"Fees Paid: Not Paid"</h3>}
            </>
        )
    }
}

export default PersonInfo;