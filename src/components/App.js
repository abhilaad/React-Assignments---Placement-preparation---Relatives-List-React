import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key ="relativeList">
                   <li key="relativeListItem1">PK</li>
                   <li key="relativeListItem2">DK</li>
                   <li key="relativeListItem3">TK</li>
               </ol>
            </div>
        )
    }
}


export default App;

