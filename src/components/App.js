import React from 'react';
import Counter from "./Counter";
import {connect} from "react-redux";
import Buttons from "./Buttons";

class App extends React.Component {
    render() {
        return (
            <div>
                <Buttons/>
                {this.props.counters.map((counter, i) => {
                    return (
                        <Counter key={i}
                                 index={i}/>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counters: state.get('counters')
    }
};

App = connect(mapStateToProps)(App);

export default App;