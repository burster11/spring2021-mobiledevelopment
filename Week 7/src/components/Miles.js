import React, {Component} from 'react'

class Miles extends Component {
    constructor(props) {
        super(props);
        this.state= {
            Runmiles: 0
        };
    };

render(){
    return(
        <div>
            <h2>Run miles: {this.state.Runmiles}</h2>
            <button onClick={()=>this.setState({Runmiles: this.state.Runmiles + 1})}>+1 mile</button>
            <button onClick={()=>this.setState({Runmiles: 0})}>Reset Counter</button>
        </div>
    )
}
}
export default Miles;
