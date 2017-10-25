import {CHANGE_COLOR, CREATE, DECREMENT, INCREMENT, REMOVE} from "../actions/actionTypes";
import {fromJS, Map} from 'immutable';


let initialState = fromJS({
    counters: [
        {
            number: 0,
            color: 'black'
        }
    ]
});

export const reducer = (state = initialState, action) => {
    const counters = state.get('counters');
    switch (action.type) {
        case CREATE:
            return state.set('counters', counters.push(Map({
                number: 0,
                color: 'black'
            })));
        case REMOVE:
            return state.set('counters', counters.pop());
        case INCREMENT:
            return state.set('counters', counters.setIn([action.index, 'number'], counters.getIn([action.index, 'number']) + 1));
        case DECREMENT:
            return state.set('counters', counters.setIn([action.index, 'number'], counters.getIn([action.index, 'number']) - 1));
        case CHANGE_COLOR:
            return state.set('counters', counters.setIn([action.index, 'color'], action.color));
        default:
            return state;
    }
};
