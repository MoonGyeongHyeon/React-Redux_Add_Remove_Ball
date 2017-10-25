import React from 'react';
import "./Counter.css"
import {changeColor, decrement, increment} from "../actions/actionTypes";
import {connect} from "react-redux";
import {getRandomColor} from "../utils/index";

class Counter extends React.Component {
    leftClickEvent() {
        this.props.onIncrement(this.props.index);
    }

    rightClickEvent() {
        this.props.onDecrement(this.props.index);
    }

    doubleClickEvent() {
        this.props.onChangeColor(this.props.index, getRandomColor());
    }

    render() {
        return (
            <div className="Counter"
                 style={
                     {background: this.props.color}
                 }
                 onClick={this.leftClickEvent.bind(this)}
                 onContextMenu={
                     (e) => {
                         e.preventDefault();
                         this.rightClickEvent();
                     }
                 }
                 onDoubleClick={this.doubleClickEvent.bind(this)}>
                {this.props.number}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        number: state.getIn(['counters', ownProps.index, 'number']),
        color: state.getIn(['counters', ownProps.index, 'color'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (index) => dispatch(increment(index)),
        onDecrement: (index) => dispatch(decrement(index)),
        onChangeColor: (index, color) => dispatch(changeColor(index, color))
    }
};

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;