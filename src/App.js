import React from 'react';
import ReactDOM from 'react-dom';
import Developer from "./Developer";

class App extends React.Component {
    render() {
        return <div>
            <h1>Ура! Я почти познал React )))</h1>
            <p>Но еще много учиться(</p>
        </div>
    }
}

new Developer('Лев');

ReactDOM.render(<App/>, document.querySelector("#root"));