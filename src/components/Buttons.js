import React from 'react';
import "./Buttons.css"
import {create, remove} from "../actions/actionTypes";
import {connect} from "react-redux";

class Buttons extends React.Component {
    render() {
        return (
            <div className="Buttons">
                <div className="btn add" onClick={this.props.onCreate}>
                    생성
                </div>
                <div className="btn remove" onClick={this.props.onRemove}>
                    삭제
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: () => dispatch(create()),
        onRemove: () => dispatch(remove())
    }
};

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;