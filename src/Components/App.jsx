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
        }
    }
    render() {
        return(
            <h1> { this.state.text } </h1>
        )
    }
}