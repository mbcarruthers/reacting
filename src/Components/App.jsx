import React , { Component } from "react";


// const App = ( props ) => {
//     return(
//         <div>
//             <h1> { props.value }  </h1>
//         </div>
//     )
// };
//
// export default App;


export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            text: props.value,
            hasLoaded:false
        }
    }
    /*===============================*/
    handleEvent = ( value ) => {
        this.setState({
            newProperty: value
        })
    };
    /*===============================*/
    toggle = () => { // function is not needed but is required by the objectives. I accomplished it differently on line 58
        if (this.state.hasLoaded === false)
            this.state.hasLoaded = true;
        else if (this.state.hasLoaded === true)
            this.state.hasLoaded = false;
        console.log( this.state.hasLoaded );
    };


    /*===============================*/
    render() {
        return(
            <React.Fragment>
                <h1> { this.state.text } </h1>
                <h1> { this.props.value } </h1>
                <hr/>
                <input
                placeholder={ this.state.text }
                onChange={ ( event ) => {
                    this.handleEvent( event.target.value );
                }}
                />
                <button
                onClick={ () => {
                    this.toggle();
                }}

                />
                { this.state.newProperty ? <h1> { this.state.newProperty } </h1> : "Loading..." }
            </React.Fragment>
        )
    }
}